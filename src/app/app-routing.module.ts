import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonsListComponent} from "./modules/persons/persons-list/persons-list.component";
import {TripsListComponent} from "./modules/trips/trips-list/trips-list.component";
import {CollectivesListComponent} from "./modules/collectives/collectives-list/collectives-list.component";
import {PersonFormComponent} from "./modules/persons/person-form/person-form.component";
import {CollectiveFormComponent} from "./modules/collectives/collective-form/collective-form.component";
import {TripsFormComponent} from "./modules/trips/trips-form/trips-form.component";

const routes: Routes = [{
  path: '',
  redirectTo: 'persons',
  pathMatch: 'full'
},
  {
    path: 'persons',
    component: PersonsListComponent
  },
  {
    path: 'collectives',
    component: CollectivesListComponent
  },
  {
    path: 'trips',
    component: TripsListComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
