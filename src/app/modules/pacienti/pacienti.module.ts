import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PacientiRoutingModule} from './pacienti-routing.module';
import {PacientiComponent} from './pacienti/pacienti.component';
import {MaterialModule} from "../material/material.module";
import {BoliComponent} from './boli/boli.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {PhonePipe} from "../../phone.pipe";
import { PacientComponent } from './pacient/pacient.component';


@NgModule({
  declarations: [
    PacientiComponent,
    BoliComponent,
    PhonePipe,
    PacientComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PacientiRoutingModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    PhonePipe
  ]
})
export class PacientiModule {
}
