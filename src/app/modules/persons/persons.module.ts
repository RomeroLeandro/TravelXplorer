import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonsDetailComponent } from './persons-detail/persons-detail.component';
import { PersonFormComponent } from './person-form/person-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    PersonsListComponent,
    PersonsDetailComponent,
    PersonFormComponent
  ],
  exports: [
    PersonsListComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class PersonsModule { }
