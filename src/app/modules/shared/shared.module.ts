import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPacientComponent } from './add-edit-pacient/add-edit-pacient.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HoverBtnDirective} from "../../hover-btn.directive";



@NgModule({
  declarations: [
    AddEditPacientComponent,
    HoverBtnDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddEditPacientComponent
  ],
  exports: [
    HoverBtnDirective
  ]
})
export class SharedModule { }
