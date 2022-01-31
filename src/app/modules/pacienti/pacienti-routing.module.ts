import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PacientiComponent} from "./pacienti/pacienti.component";
import {PacientComponent} from "./pacient/pacient.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pacienti'
  },
  {
    path: 'pacienti',
    pathMatch: 'full',
    component: PacientiComponent
  },
  {
    path: 'pacienti/:id',
    component: PacientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientiRoutingModule { }
