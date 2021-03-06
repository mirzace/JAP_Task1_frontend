import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { ScreenplayDetailResolver } from '../core/resolvers/screenplay-detail.resolver';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RateComponent } from './rate/rate.component';
import { ScreenplayDetailComponent } from './screenplay-detail/screenplay-detail.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rate', component: RateComponent },
  { path: 'screenplay/:id', component: ScreenplayDetailComponent, resolve: {screenplay: ScreenplayDetailResolver}},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }