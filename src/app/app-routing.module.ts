import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children:
    [
      {
        path: '',
        loadChildren: () => import('src/app/modules/pacienti/pacienti.module').then(m => m.PacientiModule)
      }
    ]
  },
  // modul pentru login si register
  {
    path: 'auth',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m=> m.AuthModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
