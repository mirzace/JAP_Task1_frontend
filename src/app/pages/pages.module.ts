import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { RateComponent } from './rate/rate.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ScreenplayDetailComponent } from './screenplay-detail/screenplay-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    RateComponent,
    ScreenplayDetailComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
  ]
})
export class PagesModule { }
