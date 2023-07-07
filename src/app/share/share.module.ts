import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ShareModule { }
