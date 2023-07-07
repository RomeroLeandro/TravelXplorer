import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'persons',
  loadChildren: () => import('../modules/persons/persons.module').then((m) => m.PersonsModule)
},
  {
    path: 'collectives',
    loadChildren: () => import('../modules/collectives/collectives.module').then((m) => m.CollectivesModule),
  },
  {
    path: 'trips',
    loadChildren: () => import('../modules/trips/trips.module').then((m) => m.TripsModule),
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
