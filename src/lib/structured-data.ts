/**
 * schema.org JSON-LD for the site, built from src/data/constants.ts so it
 * never drifts from the visible content. Rendered by JsonLd.astro.
 * Validate with https://search.google.com/test/rich-results
 */
import { PERSONAL_INFO, SITE_TITLE, SKILLS, EDUCATION, PUBLICATIONS } from '../data/constants';
import type { Project } from '../data/types';

const abs = (path: string, site: URL) => new URL(path, site).href;
const personId = (site: URL) => abs('/#person', site);
const websiteId = (site: URL) => abs('/#website', site);

function person(site: URL) {
  const sameAs = PERSONAL_INFO.socials
    .filter((s) => s.url.startsWith('https://') && !s.url.startsWith(site.origin))
    .map((s) => s.url);
  const knowsAbout = [...new Set(Object.values(SKILLS).flat().map((s) => s.name))];

  return {
    '@type': 'Person',
    '@id': personId(site),
    name: PERSONAL_INFO.name,
    url: abs('/', site),
    image: abs('/media/profile.png', site),
    jobTitle: PERSONAL_INFO.title,
    description: PERSONAL_INFO.about,
    email: `mailto:${PERSONAL_INFO.email}`,
    sameAs,
    knowsAbout,
    alumniOf: { '@type': 'CollegeOrUniversity', name: EDUCATION.institution },
  };
}

function website(site: URL) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(site),
    url: abs('/', site),
    name: SITE_TITLE,
    inLanguage: 'en',
    publisher: { '@id': personId(site) },
  };
}

/** Home page: the site, the profile page, the person and their publications. */
export function homeGraph(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      website(site),
      {
        '@type': 'ProfilePage',
        '@id': abs('/#profilepage', site),
        url: abs('/', site),
        name: SITE_TITLE,
        isPartOf: { '@id': websiteId(site) },
        mainEntity: { '@id': personId(site) },
      },
      person(site),
      ...PUBLICATIONS.map((pub) => ({
        '@type': 'ScholarlyArticle',
        headline: pub.title,
        url: pub.url,
        datePublished: pub.date,
        isPartOf: { '@type': 'PublicationEvent', name: pub.conference },
        author: { '@id': personId(site) },
      })),
    ],
  };
}

/** Project page: the project, its author and a Home › Project breadcrumb. */
export function projectGraph(project: Project, site: URL) {
  const url = abs(`/projects/${project.slug}/`, site);
  const external = [project.liveUrl, project.microsoftStoreUrl, project.githubUrl].filter(
    (u): u is string => Boolean(u),
  );

  return {
    '@context': 'https://schema.org',
    '@graph': [
      website(site),
      {
        // SoftwareSourceCode when there is a public repo, otherwise a plain
        // CreativeWork. (SoftwareApplication would need price/rating data
        // that this site doesn't have.)
        '@type': project.githubUrl ? 'SoftwareSourceCode' : 'CreativeWork',
        '@id': `${url}#project`,
        name: project.title,
        headline: project.title,
        description: project.description,
        abstract: project.longDescription.join(' '),
        url,
        image: abs(project.image, site),
        keywords: project.tags.join(', '),
        ...(project.githubUrl && { codeRepository: project.githubUrl }),
        ...(external.length > 0 && { sameAs: external }),
        author: { '@id': personId(site) },
        isPartOf: { '@id': websiteId(site) },
      },
      person(site),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', site) },
          { '@type': 'ListItem', position: 2, name: project.title, item: url },
        ],
      },
    ],
  };
}
