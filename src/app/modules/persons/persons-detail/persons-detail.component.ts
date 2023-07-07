import {Component, Inject} from '@angular/core';
import {Person} from "../../../models/persons";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-persons-detail',
  templateUrl: './persons-detail.component.html',
  styleUrls: ['./persons-detail.component.scss']
})
export class PersonsDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public person: Person) { }
}
