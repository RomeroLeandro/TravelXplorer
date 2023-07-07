import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environments";
import {Person} from "../models/persons";
@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  apiUrl: string = environment.backUrl + 'personas';
  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}`, person);
  }
  deletePerson(id: number): Observable<Person> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Person>(url);
  }
  updatePerson(person: Person) {
      return this.http.put(`${this.apiUrl}/${person.id}`, person);
    }
}
