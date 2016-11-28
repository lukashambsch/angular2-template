import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
              public authService: AuthService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.params = params;
    });
  }

  login() {
    this.authService.authenticate(this.username, this.password)
        .subscribe((data) => {
          let token = data.access_token;

          if (token) {
            let redirectURL = `${this.params.redirect_uri}#?access_token=${token}&state=${this.params.state}&nonce=${this.params.nonce}`;
            window.location.href = redirectURL;
          }
        }, (error) => {
          if (error.status === 401) {
            this.errorMessage = 'Incorrect username or password. Try again.';
          } else {
            this.errorMessage = `
              Nova is currently undergoing maintenance at this time. Please try again in a few minutes.
            `;
          }
        });
  }
}
