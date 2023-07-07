import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Person } from '../models/persons';
import { Collective } from '../models/collective';
import { CollectivesModule } from '../modules/collectives/collectives.module';

@Injectable({
  providedIn: 'root'
})
export class CollectiveDataService {
  private collectiveSource = new BehaviorSubject<Collective[]>([]);
  persons$ = this.collectiveSource.asObservable();

  updateCollective(collective: Collective[]): void {
    this.collectiveSource.next(collective);
  }

  private collectiveDataUpdated = new Subject<CollectivesModule[]>();

  collectiveDataUpdated$ = this.collectiveDataUpdated.asObservable();

  updateCollectiveData(collective: Collective[]): void {
    this.collectiveDataUpdated.next(collective);
  }
}