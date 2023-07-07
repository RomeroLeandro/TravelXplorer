import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trip } from '../../../models/trips';
import { Person } from '../../../models/persons';
import { Collective } from '../../../models/collective';
import { PersonsService } from '../../../services/persons.service';
import { CollectivesService } from '../../../services/collectives.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trips-detail.component.html',
  styleUrls: ['./trips-detail.component.scss']
})
export class TripsDetailComponent implements OnInit {
  trip: Trip;
  persons: Person[] = [];
  collective: Collective | undefined;

  constructor(
    private personsService: PersonsService,
    private collectivesService: CollectivesService,
    private dialogRef: MatDialogRef<TripsDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Trip
  ) {
    this.trip = data;
  }

  ngOnInit(): void {
    this.getPersons();
    this.getCollective(this.trip.idColectivo);
  }

  getPersons(): void {
    this.personsService.getPersons().subscribe(
      (persons: Person[]) => {
        this.persons = persons.filter(person => this.trip.personaId.includes(person.id));
      },
      (error) => {
        console.error('Error getting persons:', error);
      }
    );
  }

  getCollective(collectiveId: number): void {
    this.collectivesService.getCollectives().subscribe(
      (collectives: Collective[]) => {
        const collective = collectives.find(collective => collective.id === collectiveId);
        if (collective) {
          this.collective = collective;
        }
      },
      (error) => {
        console.error('Error getting collective:', error);
      }
    );
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
