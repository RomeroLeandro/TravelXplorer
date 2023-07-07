import {Component, OnInit} from '@angular/core';
import {PersonsService} from "../../../services/persons.service";
import {Person} from "../../../models/persons";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import {PersonsDetailComponent} from "../persons-detail/persons-detail.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PersonFormComponent} from "../person-form/person-form.component";
import { PersonDataService } from 'src/app/services/person-data.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit{
  persons: Person[] = [];

  constructor(private personsService: PersonsService,private router: Router,private activatedRoute: ActivatedRoute,private dialog: MatDialog,private personDataService: PersonDataService) { }

  ngOnInit(): void {

    this.getPersons();
  }
  getPersons(): void {
    this.personsService.getPersons()
      .subscribe(
        data => {
          this.persons = data;
          this.personDataService.updatePersons(data);
        },
        error => {
          console.log(error);
        }
      );
  }
  openPersonDetailModal(person: Person): void {
    this.dialog.open(PersonsDetailComponent, {
      data: person
    });
  }
  openPersonFormModal(editMode: boolean, person?: Person): void {
  const dialogRef = this.dialog.open(PersonFormComponent, {
    width: '400px',
    data: {
      editMode: editMode,
      person: person
    }
  });

  dialogRef.afterClosed().subscribe((newPerson: Person) => {
    if (newPerson) {
      if (editMode) {
        // Actualizar la persona existente en la lista
        const index = this.persons.findIndex(p => p.id === newPerson.id);
        if (index !== -1) {
          this.persons[index] = newPerson;
        }
      } else {
        // Agregar la nueva persona a la lista
        this.persons.push(newPerson);
      }
    }
    this.getPersons();
  });
}

  deletePerson(id: number): void{
    this.personsService.deletePerson(id).subscribe(
      ()=>{
        console.log('persona Eliminada')
        this.getPersons()
      },
      (error) => {
        console.log('error al eliminar la persona',error)
      }
    )
  }
}
