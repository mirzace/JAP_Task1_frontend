import { Component, OnInit } from '@angular/core';
import { ScreenplayService } from 'src/app/core/services/screenplay.service';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Screenplay } from 'src/app/shared/models/screenplay.model';
import { ScreenplayParams } from 'src/app/shared/models/screenplayParams.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  screenplays: Screenplay[] =[];
  pagination : Pagination;
  screenplayParams : ScreenplayParams;

  constructor(private screenplayService : ScreenplayService) {
    this.screenplayParams = this.screenplayService.getScreenplayParams();
    this.screenplayParams.search = "";
    this.screenplayParams.pageNumber = 1;
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

  switchCategory(category: string) {
    this.screenplays = [];
    this.screenplayParams = this.screenplayService.resetScreenplayParams();
    this.screenplayParams.category = category;
    this.loadScreenplays();
  }

  loadMore() {
    this.screenplayParams.pageNumber = ++this.screenplayParams.pageNumber;
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.loadScreenplays();
  }
  
  onSearch(searchTerm: any){  
    if(searchTerm.length == 0) {
      this.screenplays = [];
      this.screenplayParams.search = "";
      this.screenplayParams.pageNumber = 1;
      this.screenplayService.getScreenplays(this.screenplayParams);
      this.loadScreenplays();
    }
     

    if(searchTerm.length >= 2) {
      this.screenplays = [];
      this.screenplayParams.search = searchTerm;
      this.screenplayService.getScreenplays(this.screenplayParams);
      this.loadScreenplays();
    }
  }
}
