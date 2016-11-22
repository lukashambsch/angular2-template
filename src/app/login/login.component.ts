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
  params: any = {};

  constructor(public router: Router,
              public authService: AuthService) {}

  ngOnInit() {
    let paramString: string = window.location.href.split('?')[1];
    let paramVals: any = paramString.split('&');
    for (let i = 0; i < paramVals.length; i++) {
      let param: any = paramVals[i];
      let paramKeyVal: any = param.split('=');
      this.params[paramKeyVal[0]] = decodeURIComponent(paramKeyVal[1]);
    }
  }

  login() {
    this.authService.authenticate(this.username, this.password)
        .subscribe((data) => {
          let sessionId = data.SessionId;

          if (sessionId) {
            let redirectURL = `${this.params.redirect_uri}?sessionid=${sessionId}`;
            window.location.href = redirectURL;
          }
        }, error => this.errorMessage = error);
  }
}
