import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  register(model:any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((res:any) => {
        console.log(res);
        if(res.data) {
          this.setCurrentUser(res.data);
        }
        return res;
      })
    )
  }

  login(model:any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((res: any) => {
        const user : User = res.data;
        if(user) {
          this.setCurrentUser(user);
        }
        return res;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
