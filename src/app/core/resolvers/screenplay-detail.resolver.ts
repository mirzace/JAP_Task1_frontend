import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import { Screenplay } from 'src/app/shared/models/screenplay.model';
import { ScreenplayService } from '../services/screenplay.service';

@Injectable({
  providedIn: 'root'
})
export class ScreenplayDetailResolver implements Resolve<Screenplay> {

  constructor(private screenplayService: ScreenplayService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Screenplay> {
    return this.screenplayService.getScreenplay(parseInt(route.paramMap.get('id')));
  }
}
