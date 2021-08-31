import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RateComponent } from './rate/rate.component';
import { ScreenplayDetailComponent } from './screenplay-detail/screenplay-detail.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rate', component: RateComponent },
  { path: 'screenplay/:id', component: ScreenplayDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }