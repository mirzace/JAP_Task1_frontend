import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenplayDetailResolver } from '../core/resolvers/screenplay-detail.resolver';
import { HomeComponent } from './home/home.component';
import { RateComponent } from './rate/rate.component';
import { ScreenplayDetailComponent } from './screenplay-detail/screenplay-detail.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rate', component: RateComponent },
  { path: 'screenplay/:id', component: ScreenplayDetailComponent, resolve: {screenplay: ScreenplayDetailResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }