import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Collective } from '../../../models/collective';
import { CollectivesService } from '../../../services/collectives.service';
import { CollectiveDataService } from 'src/app/services/collective-data.service';
import { Model } from '../../../models/model';
import { ModelsService } from '../../../services/models.service';

@Component({
  selector: 'app-collective-form',
  templateUrl: './collective-form.component.html',
  styleUrls: ['./collective-form.component.scss']
})
export class CollectiveFormComponent implements OnInit {
  collectiveForm: FormGroup;
  editMode = false;
  buttonText = 'Agregar Colectivo';
  tittle = 'Agregar colectivo'
  models: Model[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private collectivesService: CollectivesService,
    private dialogRef: MatDialogRef<CollectiveFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { collective: Collective, editMode: boolean },
    private collectiveDataService: CollectiveDataService,
    private modelsService: ModelsService
  ) {
    this.collectiveForm = this.formBuilder.group({
      patente: ['', Validators.required],
      cantidadAsientos: ['', Validators.required],
      modeloId: ['', Validators.required]
    });

    if (data.editMode) {
      this.editMode = true;
      this.collectiveForm.patchValue(data.collective);
      this.buttonText = 'Guardar Cambios';
      this.tittle = 'Editar colectivo'
    }
  }

  ngOnInit(): void {
    this.getModels();
  }

  getModels(): void {
    this.modelsService.getModel().subscribe(
      (modelsResponse) => {
        this.models = modelsResponse;
      },
      (error) => {
        console.log('Error obteniendo modelos:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.collectiveForm.invalid) {
      return;
    }

    const formValue = this.collectiveForm.value;

    if (this.editMode) {
      const updatedCollective: Collective = {
        id: this.data.collective.id,
        patente: formValue.patente,
        cantidadAsientos: formValue.cantidadAsientos,
        idModelo: this.data.collective.idModelo,
        modeloId: formValue.modeloId
      };

      this.collectivesService.updateCollective(updatedCollective)
        .subscribe(
          (response) => {
            console.log('Collective updated:', response);
            this.dialogRef.close();
          },
          (error) => {
            console.error('Error updating collective:', error);
          }
        );
    } else {
      this.collectivesService.getCollectives().subscribe(
        (collectives: Collective[]) => {
          const lastCollective = collectives[collectives.length - 1];
          const lastId = lastCollective ? lastCollective.id : 0;

          const newCollective: Collective = {
            id: lastId + 1,
            patente: formValue.patente,
            cantidadAsientos: formValue.cantidadAsientos,
            idModelo: lastId + 1,
            modeloId: formValue.modeloId
          };

          this.collectivesService.createCollective(newCollective).subscribe(
            (response) => {
              console.log('Collective created:', response);
              this.collectiveDataService.updateCollective([response]);
              this.dialogRef.close(response);
            },
            (error) => {
              console.error('Error creating collective:', error);
            }
          );
        },
        (error) => {
          console.error('Error getting collectives:', error);
        }
      );
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
