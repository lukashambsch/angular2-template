import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/index';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string;

  constructor(public router: Router,
              public authService: AuthService) {}

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.username, this.password)
        .subscribe((successful) => {
          if (successful) {
            this.router.navigate(['/']);
          }
        }, error => this.errorMessage = error);
  }
}
