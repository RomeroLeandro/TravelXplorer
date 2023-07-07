import { Component, OnInit } from '@angular/core';
import { TripsService } from "../../../services/trips.service";
import { Trip } from "../../../models/trips";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { TripsDetailComponent } from "../trips-detail/trips-detail.component";
import { TripsFormComponent } from "../trips-form/trips-form.component";

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(
    private tripsService: TripsService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripsService.getTrips()
      .subscribe(
        data => {
          this.trips = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  openTripDetailModal(trip: Trip): void {
    this.dialog.open(TripsDetailComponent, {
      height: '70vh',
      data: trip
    });
  }

  openTripFormModal(editMode: boolean, trip?: Trip): void {
    const dialogRef = this.dialog.open(TripsFormComponent, {
      width: '500px',
      height: '90vh',
      data: {
        editMode: editMode,
        trip: trip
      }
    });

    dialogRef.afterClosed().subscribe((newTrip: Trip) => {
      if (newTrip) {
        if (editMode) {
          // Actualizar el viaje existente en la lista
          const index = this.trips.findIndex(t => t.id === newTrip.id);
          if (index !== -1) {
            this.trips[index] = newTrip;
          }
        } else {
          // Agregar el nuevo viaje a la lista
          this.trips.push(newTrip);
        }
      }
      this.getTrips();
    });
  }

  deleteTrip(id: number): void {
    this.tripsService.deleteTrip(id).subscribe(
      () => {
        console.log('Viaje eliminado');
        this.getTrips();
      },
      (error) => {
        console.log('Error al eliminar el viaje', error);
      }
    );
  }
}
