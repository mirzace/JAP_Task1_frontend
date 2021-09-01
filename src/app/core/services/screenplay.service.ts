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

  getScreenplay(id: number) {
    const screenplay = [...this.screenplaysCache.values()]
      .reduce( (arr, elem) => arr.concat(elem.result), [] )
      .find((screenplay : Screenplay) => screenplay.id === id);

    if(screenplay) {
      return of(screenplay);
    }
    return this.http.get<Screenplay>(this.baseUrl + 'screenplays/' + id)
      .pipe( map((response: any) => {
        return response.data;
      }));
  }

  rateScreenplay(id: number, rate: number) {
    const rating = {
      "rate": rate,
      "screenplayId": id
    }
    this.http.post(this.baseUrl + 'ratings', rating).subscribe( (res: any) => {
      //Update local array
      const screenplay = [...this.screenplaysCache.values()]
      .reduce( (arr, elem) => arr.concat(elem.result), [] )
      .find((screenplay : Screenplay) => screenplay.id === id);
      screenplay.averageRate = res.data.averageRate;
    });
  }
}
