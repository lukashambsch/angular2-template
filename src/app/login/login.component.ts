import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/index';


@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
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
        .subscribe((data) => {
          let sessionId = data.SessionId;

          if (sessionId) {
            let novaURL = `http://localhost:3000/#?sessionid=${sessionId}`;
            window.location.href = novaURL;
            //this.router.navigate(['/']);
          }
        }, error => this.errorMessage = error);
  }
}
