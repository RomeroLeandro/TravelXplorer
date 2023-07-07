import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsListComponent } from './trips-list/trips-list.component';
import { TripsDetailComponent } from './trips-detail/trips-detail.component';
import { TripsFormComponent } from './trips-form/trips-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    TripsListComponent,
    TripsDetailComponent,
    TripsFormComponent
  ],
  exports: [
    TripsListComponent,
    TripsFormComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule
  ]
})
export class TripsModule { }
