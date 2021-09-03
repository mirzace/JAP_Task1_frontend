import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalComponent } from './layouts/horizontal/horizontal.component';

const routes: Routes = [
  { path: '', component: HorizontalComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
