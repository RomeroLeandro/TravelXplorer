import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Person } from '../models/persons';
import { Trip } from '../models/trips';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private tripsSource = new BehaviorSubject<Trip[]>([]);
  persons$ = this.tripsSource.asObservable();

  updateTrips(trips: Trip[]): void {
    this.tripsSource.next(trips);
  }

  private tripDataUpdated = new Subject<Trip[]>();

  tripDataUpdated$ = this.tripDataUpdated.asObservable();

  updateTripsData(trips: Trip[]): void {
    this.tripDataUpdated.next(trips);
  }
}