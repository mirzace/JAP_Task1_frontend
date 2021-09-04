import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  protectedMessage : string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProtectedResource().subscribe((res : any) => {
      this.protectedMessage = res.data;
    })
  }

}
