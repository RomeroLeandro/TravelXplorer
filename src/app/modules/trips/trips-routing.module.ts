import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonsListComponent} from "../persons/persons-list/persons-list.component";
import {PersonsDetailComponent} from "../persons/persons-detail/persons-detail.component";
import {PersonFormComponent} from "../persons/person-form/person-form.component";
import {TripsListComponent} from "./trips-list/trips-list.component";
import {TripsDetailComponent} from "./trips-detail/trips-detail.component";
import {TripsFormComponent} from "./trips-form/trips-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: 'trips',
    component: TripsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
