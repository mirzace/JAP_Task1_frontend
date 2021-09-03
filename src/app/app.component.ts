import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { User } from './shared/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.autoAuthUser();
  }

  autoAuthUser() {
    const user : User = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.authService.setCurrentUser(user);
    }
  }
}
