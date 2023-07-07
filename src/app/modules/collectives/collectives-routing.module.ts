import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectivesListComponent} from "./collectives-list/collectives-list.component";
import {CollectivesDetailComponent} from "./collectives-detail/collectives-detail.component";
import {CollectiveFormComponent} from "./collective-form/collective-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: 'collectives',
    component: CollectivesListComponent,
  },
  {
    path: 'collectives/detail/:id',
    component: CollectivesDetailComponent,
  },
  {
    path: 'collectives/create',
    component: CollectiveFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectivesRoutingModule { }
