import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'people-details',
    loadChildren: () => import('./pages/people-details/people-details.module').then( m => m.PeopleDetailsPageModule)
  },
  {
    path: 'planet-details',
    loadChildren: () => import('./pages/planet-details/planet-details.module').then( m => m.PlanetDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
