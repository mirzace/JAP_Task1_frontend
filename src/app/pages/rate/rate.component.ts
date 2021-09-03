import { Component, OnInit } from '@angular/core';
import { ScreenplayService } from 'src/app/core/services/screenplay.service';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Screenplay } from 'src/app/shared/models/screenplay.model';
import { ScreenplayParams } from 'src/app/shared/models/screenplayParams.model';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.sass']
})
export class RateComponent implements OnInit {

  screenplays: Screenplay[] = [];
  pagination : Pagination;
  screenplayParams : ScreenplayParams;

  // Rating
  max = 5;
  rate = 1;
  isReadonly = false;
  overStar: number | undefined;

  constructor(private screenplayService : ScreenplayService) {
    this.screenplayParams = this.screenplayService.resetScreenplayParams();
  }

  ngOnInit(): void {
    this.loadScreenplays();
  }

  loadScreenplays() {
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.screenplayService.getScreenplays(this.screenplayParams).subscribe( res => {
      this.screenplays = this.screenplays.concat(res.result);
      this.pagination = res.pagination;
    })
  }

  loadMore() {
    this.screenplayParams.pageNumber = ++this.screenplayParams.pageNumber;
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.loadScreenplays();
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }

  logClick(event: any) {
    this.isReadonly = true;
    console.log("kliknuto")
  }

}
