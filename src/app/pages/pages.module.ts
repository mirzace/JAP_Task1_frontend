import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RatingModule } from 'ngx-bootstrap/rating';

import { HomeComponent } from './home/home.component';
import { RateComponent } from './rate/rate.component';
import { ScreenplayDetailComponent } from './screenplay-detail/screenplay-detail.component';
import { StarRatingComponent } from './rate/star-rating/star-rating.component';
import { StarComponent } from './rate/star-rating/star/star.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    RateComponent,
    ScreenplayDetailComponent,
    StarRatingComponent,
    StarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    SharedModule,
    RatingModule.forRoot(),
    ButtonsModule.forRoot(),
    
  ]
})
export class PagesModule { }
