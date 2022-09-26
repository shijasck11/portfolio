import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent}
  ])],

  exports: [RouterModule]
})
export class AppRoutingModule { }
