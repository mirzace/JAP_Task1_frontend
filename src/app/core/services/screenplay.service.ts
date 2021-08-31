import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Screenplay } from 'src/app/shared/models/screenplay.model';
import { ScreenplayParams } from 'src/app/shared/models/screenplayParams.model';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScreenplayService {
  baseUrl = environment.apiUrl;
  screenplays: Screenplay[] = [];
  screenplaysCache = new Map();
  screenplayParams: ScreenplayParams;

  constructor(private http: HttpClient) { 
    this.screenplayParams = new ScreenplayParams();
  }

  getScreenplayParams() {
    return this.screenplayParams;
  }

  setScreenplayParams(params: ScreenplayParams) {
    this.screenplayParams = params;
  }

  resetScreenplayParams() {
    this.screenplayParams = new ScreenplayParams();
    return this.screenplayParams;
  }

  getScreenplays(screenplayParams: ScreenplayParams) {
    let response = this.screenplaysCache.get(Object.values(screenplayParams).join('-'));
    if(response) {
      return of(response);
    }

    let params = getPaginationHeaders(screenplayParams.pageNumber, screenplayParams.pageSize);

    params = params.append('search', screenplayParams.search.toString());
    params = params.append('category', screenplayParams.category.toString());
    params = params.append('orderBy', screenplayParams.orderBy.toString());

    return getPaginatedResult<Screenplay[]>(this.baseUrl + 'screenplays',params, this.http)
      .pipe( map((response) => {
        this.screenplaysCache.set(Object.values(screenplayParams).join('-'), response);
        return response;
      }));
  }

  getScreenplay(username: string) {
    /*
    const member = [...this.memberCache.values()]
      .reduce( (arr, elem) => arr.concat(elem.result), [] )
      .find((member : Member) => member.userName === username);

    if(member) {
      return of(member);
    }

    return this.http.get<Member>(this.baseUrl + 'users/' + username);
    */
  }
}
