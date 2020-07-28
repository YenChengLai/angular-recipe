import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Angular-Recipe';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoLogin();
  }
}
