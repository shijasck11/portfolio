import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: '', component: AboutComponent},
    { path: 'home', component: AboutComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
