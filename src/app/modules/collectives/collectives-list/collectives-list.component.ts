import { Component, OnInit } from '@angular/core';
import { Person } from "../../../models/persons";
import { PersonsService } from "../../../services/persons.service";
import { CollectivesService } from "../../../services/collectives.service";
import { Collective } from "../../../models/collective";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CollectivesDetailComponent } from '../collectives-detail/collectives-detail.component';
import { CollectiveFormComponent } from '../collective-form/collective-form.component';
import { Model } from "../../../models/model";
import { ModelsService } from "../../../services/models.service";

@Component({
  selector: 'app-collectives-list',
  templateUrl: './collectives-list.component.html',
  styleUrls: ['./collectives-list.component.scss']
})
export class CollectivesListComponent implements OnInit {
  collectives: Collective[] = [];
  models: Model[] = [];

  constructor(
    private collectivesService: CollectivesService,
    private modelsService: ModelsService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCollectives();
    this.getModels();
  }

  getCollectives(): void {
    this.collectivesService.getCollectives().subscribe(
      (data) => {
        this.collectives = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getModels(): void {
    this.modelsService.getModel().subscribe(
      (data) => {
        this.models = data;
      },
      (error) => {
        console.log('Error obteniendo modelos:', error);
      }
    );
  }

  getModelMarca(modelId: number): string {
    const model = this.models.find((m) => m.id === modelId);
    return model ? model.marca.toString() : '';
  }

  openCollectiveDetailModal(collective: Collective): void {
    this.dialog.open(CollectivesDetailComponent, {
      data: collective
    });
  }

  openCollectiveFormModal(editMode: boolean, collective?: Collective): void {
    const dialogRef = this.dialog.open(CollectiveFormComponent, {
      width: '400px',
      data: {
        editMode: editMode,
        collective: collective,
        models: this.models
      }
    });

    dialogRef.afterClosed().subscribe((newCollective: Collective) => {
      if (newCollective) {
        if (editMode) {
          // Actualizar el colectivo existente en la lista
          const index = this.collectives.findIndex((c) => c.id === newCollective.id);
          if (index !== -1) {
            this.collectives[index] = newCollective;
          }
        } else {
          // Agregar el nuevo colectivo a la lista
          this.collectives.push(newCollective);
        }
      }
      this.getCollectives();
    });
  }

  deleteCollective(id: number): void {
    this.collectivesService.deleteCollectives(id).subscribe(
      () => {
        console.log('Colectivo eliminado');
        this.getCollectives();
      },
      (error) => {
        console.log('Error al eliminar el colectivo', error);
      }
    );
  }
}
