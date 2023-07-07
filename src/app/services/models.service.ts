import { Injectable } from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../models/persons";
import {Model} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  apiUrl: string = environment.backUrl + 'modelos';
  constructor(private http: HttpClient) { }

  getModel(): Observable<Model[]> {
    return this.http.get<Model[]>(this.apiUrl);
  }

  createModel(model: Model): Observable<Model> {
    return this.http.post<Model>(`${this.apiUrl}`, model);
  }
}
