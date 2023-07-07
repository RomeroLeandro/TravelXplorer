import { Injectable } from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip} from "../models/trips";
import {Person} from "../models/persons";

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  apiUrl: string = environment.backUrl + 'viajes';
  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }
  createTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(`${this.apiUrl}`, trip);
  }
  deleteTrip(id: number): Observable<Trip> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Trip>(url);
  }
  updateTrip(trip: Trip) {
    return this.http.put(`${this.apiUrl}/${trip.id}`, trip);
  }
}
