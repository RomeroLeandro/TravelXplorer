import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from '../../../models/persons';
import { PersonsService } from '../../../services/persons.service';
import { PersonDataService } from 'src/app/services/person-data.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {
  personForm: FormGroup;
  editMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private personsService: PersonsService,
    private dialogRef: MatDialogRef<PersonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { person: Person, editMode: boolean },
    private personDataService: PersonDataService
  ) {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    });

    if (data.editMode) {
      this.editMode = true;
      this.personForm.patchValue(data.person);
    }
  }

  onSubmit(): void {
    if (this.personForm.invalid) {
      return;
    }

    const formValue = this.personForm.value;

    if (this.editMode) {
      const updatedPerson: Person = {
        id: this.data.person.id,
        name: formValue.name,
        lastName: formValue.lastName,
        age: formValue.age
      };

      this.personsService.updatePerson(updatedPerson)
        .subscribe(
          (response) => {
            console.log('Person updated:', response);
            this.dialogRef.close();
          },
          (error) => {
            console.error('Error updating person:', error);
          }
        );
    } else {
      this.personsService.getPersons().subscribe(
        (persons: Person[]) => {
          // Encontrar el último ID
          const lastPerson = persons[persons.length - 1];
          const lastId = lastPerson ? lastPerson.id : 0;

          const newPerson: Person = {
            id: lastId + 1,
            name: formValue.name,
            lastName: formValue.lastName,
            age: formValue.age
          };

          this.personsService.createPerson(newPerson).subscribe(
            (response) => {
              console.log('Person created:', response);
              this.personDataService.updatePersons([response]);
              this.dialogRef.close(response);
            },
            (error) => {
              console.error('Error creating person:', error);
            }
          );
        },
        (error) => {
          console.error('Error getting persons:', error);
        }
      );
    }
  }
  closeModal(): void {
    this.dialogRef.close();
  }
}
