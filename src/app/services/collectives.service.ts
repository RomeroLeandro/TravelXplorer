import { Injectable } from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../models/persons";
import {Collective} from "../models/collective";

@Injectable({
  providedIn: 'root'
})
export class CollectivesService {
  apiUrl: string = environment.backUrl + 'colectivos';
  constructor(private http: HttpClient) { }

  getCollectives(): Observable<Collective[]> {
    return this.http.get<Collective[]>(this.apiUrl);
  }
  createCollective(collective: Collective): Observable<Collective> {
    return this.http.post<Collective>(`${this.apiUrl}`, collective);
  }
  deleteCollectives(id: number): Observable<Collective> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Collective>(url);
  }
  updateCollective(collective: Collective) {
      return this.http.put(`${this.apiUrl}/${collective.id}`, collective);
    }
}
