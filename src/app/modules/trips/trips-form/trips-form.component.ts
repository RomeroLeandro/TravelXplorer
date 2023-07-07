import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trip } from '../../../models/trips';
import { TripsService } from '../../../services/trips.service';
import { TripDataService } from 'src/app/services/trip-data.service';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from 'src/app/models/persons';
import { Collective } from 'src/app/models/collective';
import { CollectivesService } from 'src/app/services/collectives.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trips-form.component.html',
  styleUrls: ['./trips-form.component.scss']
})
export class TripsFormComponent {
  tripForm: FormGroup;
  editMode = false;
  persons: Person[] = [];
  collectives: Collective[] = [];
  buttonText = 'Agregar Viaje';
  tittle = 'Agregar viaje'

  constructor(
    private formBuilder: FormBuilder,
    private tripsService: TripsService,
    private dialogRef: MatDialogRef<TripsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { trip: Trip, editMode: boolean },
    private tripDataService: TripDataService,
    private personsService: PersonsService,
     private colectivesService: CollectivesService
  ) {
    this.tripForm = this.formBuilder.group({
      lugarSalida: ['', Validators.required],
      lugarDestino: ['', Validators.required],
      fechaLlegada: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      personaId: [[], Validators.required],
      idColectivo: ['', Validators.required]
    });

    if (data.editMode) {
      this.editMode = true;
      this.tripForm.patchValue(data.trip);
      this.buttonText = 'Guardar Cambios';
      this.tittle = 'Editar viaje'
    }
  }

  ngOnInit(): void {
    this.getPersons();
    this.getColectives();
}

getColectives(): void {
  this.colectivesService.getCollectives().subscribe(
    (collectives: Collective[]) => {
      this.collectives = collectives;
    },
    (error) => {
      console.error('Error getting colectives:', error);
    }
  );
}
  

  getPersons(): void {
    this.personsService.getPersons().subscribe(
      (persons: Person[]) => {
        this.persons = persons;
      },
      (error) => {
        console.error('Error getting persons:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.tripForm.invalid) {
      return;
    }

    const formValue = this.tripForm.value;

    if (this.editMode) {
      const updatedTrip: Trip = {
        id: this.data.trip.id,
        lugarSalida: formValue.lugarSalida,
        lugarDestino: formValue.lugarDestino,
        fechaLlegada: formValue.fechaLlegada,
        fechaSalida: formValue.fechaSalida,
        personaId: formValue.personaId,
        idColectivo: formValue.idColectivo
      };

      this.tripsService.updateTrip(updatedTrip).subscribe(
        (response) => {
          console.log('Trip updated:', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error updating trip:', error);
        }
      );
    } else {
      this.tripsService.getTrips().subscribe(
        (trips: Trip[]) => {
          // Encontrar el último ID
          const lastTrip = trips[trips.length - 1];
          const lastId = lastTrip ? lastTrip.id : 0;

          const newTrip: Trip = {
            id: lastId + 1,
            lugarSalida: formValue.lugarSalida,
            lugarDestino: formValue.lugarDestino,
            fechaLlegada: formValue.fechaLlegada,
            fechaSalida: formValue.fechaSalida,
            personaId: formValue.personaId,
            idColectivo: formValue.idColectivo
          };

          this.tripsService.createTrip(newTrip).subscribe(
            (response) => {
              console.log('Trip created:', response);
              this.tripDataService.updateTrips([response]);
              this.dialogRef.close(response);
            },
            (error) => {
              console.error('Error creating trip:', error);
            }
          );
        },
        (error) => {
          console.error('Error getting trips:', error);
        }
      );
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
