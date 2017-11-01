import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  // {
  //   path: 'add',
  //   component: AddComponent
  // },
  {
    path: 'projects',
    component: ProjectComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
