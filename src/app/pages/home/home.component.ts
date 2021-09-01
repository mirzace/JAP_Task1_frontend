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

  screenplays: Screenplay[];
  pagination : Pagination;
  screenplayParams : ScreenplayParams;

  constructor(private screenplayService : ScreenplayService) {
    this.screenplayParams = this.screenplayService.getScreenplayParams();
  }

  ngOnInit(): void {
    this.loadScreenplays();
  }

  loadScreenplays() {
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.screenplayService.getScreenplays(this.screenplayParams).subscribe( res => {
      this.screenplays = res.result;
      this.pagination = res.pagination;
    })
  }

  loadMore() {
    this.screenplayParams.pageNumber = ++this.screenplayParams.pageNumber;
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.loadScreenplays();
  }

  
  onSearch(searchTerm: any){  
    if(searchTerm.length == 0) {
      this.screenplayParams.search = "";
      this.screenplayService.getScreenplays(this.screenplayParams);
      this.loadScreenplays();
    }
     

    if(searchTerm.length > 2) {
      this.screenplayParams.search = searchTerm;
      console.log(this.screenplayParams)
      this.screenplayService.getScreenplays(this.screenplayParams);
      this.loadScreenplays();
    }
  }
}
