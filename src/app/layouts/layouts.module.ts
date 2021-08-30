import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    HorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HorizontalComponent
  ]
})
export class LayoutsModule { }
