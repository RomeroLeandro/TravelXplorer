import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Person } from '../models/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private personsSource = new BehaviorSubject<Person[]>([]);
  persons$ = this.personsSource.asObservable();

  updatePersons(persons: Person[]): void {
    this.personsSource.next(persons);
  }

  private personDataUpdated = new Subject<Person[]>();

  personDataUpdated$ = this.personDataUpdated.asObservable();

  updatePersonData(persons: Person[]): void {
    this.personDataUpdated.next(persons);
  }
}
