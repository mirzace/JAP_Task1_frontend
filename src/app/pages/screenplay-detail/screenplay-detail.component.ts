import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenplayService } from 'src/app/core/services/screenplay.service';
import { Screenplay } from 'src/app/shared/models/screenplay.model';

@Component({
  selector: 'app-screenplay-detail',
  templateUrl: './screenplay-detail.component.html',
  styleUrls: ['./screenplay-detail.component.sass']
})
export class ScreenplayDetailComponent implements OnInit {
  screenplay: Screenplay;

  constructor(private screenplayService: ScreenplayService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.screenplay = data.screenplay;
    })
  }
}
