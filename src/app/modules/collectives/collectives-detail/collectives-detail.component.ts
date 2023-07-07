import {Component, Inject} from '@angular/core';
import {Person} from "../../../models/persons";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Collective } from 'src/app/models/collective';

@Component({
  selector: 'app-collectives-detail',
  templateUrl: './collectives-detail.component.html',
  styleUrls: ['./collectives-detail.component.scss']
})
export class CollectivesDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public collecive: Collective) { }

}
