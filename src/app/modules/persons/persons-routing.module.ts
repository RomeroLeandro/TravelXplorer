import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonsListComponent} from "./persons-list/persons-list.component";
import {PersonsDetailComponent} from "./persons-detail/persons-detail.component";
import {PersonFormComponent} from "./person-form/person-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: 'persons',
    component: PersonsListComponent,
  },
  {
    path: 'persons/detail/:id',
    component: PersonsDetailComponent,
  },
  {
    path: 'persons/create',
    component: PersonFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
