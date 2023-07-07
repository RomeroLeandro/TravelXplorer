import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectivesRoutingModule } from './collectives-routing.module';
import { CollectivesListComponent } from './collectives-list/collectives-list.component';
import { CollectivesDetailComponent } from './collectives-detail/collectives-detail.component';
import {TripsListComponent} from "../trips/trips-list/trips-list.component";
import {TripsDetailComponent} from "../trips/trips-detail/trips-detail.component";
import { CollectiveFormComponent } from './collective-form/collective-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
// import { ModelNamesPipe } frosrc/app/pipes/model-name.pipeipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    CollectivesListComponent,
    CollectivesDetailComponent,
    CollectiveFormComponent,
  ],
  exports: [
    CollectivesListComponent,
    CollectiveFormComponent
  ],
  imports: [
    CommonModule,
    CollectivesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule

  ]
})
export class CollectivesModule { }
