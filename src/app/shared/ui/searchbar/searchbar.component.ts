import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  private subjectKeyUp = new Subject<any>();

  @Output() newSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // Wait for 1s after the user stops typing
    this.subjectKeyUp.pipe((debounceTime(1000))).subscribe(value => {
      if(value.length == 0 || value.length >1)
        this.newSearchEvent.emit(value);
    })
  }

  onSearchChange(value: string) {
    this.subjectKeyUp.next(value);
  }
}
