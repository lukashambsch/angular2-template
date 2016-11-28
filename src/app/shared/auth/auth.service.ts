import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import { User } from './User';


@Injectable()
export class AuthService {
  public authenticated: boolean;
  public user: User;
  public remember: boolean;
  public usernameCookie: string = 'username';

  constructor(private http: Http) {
    this.user = new User();
  }

  /**
   *  Stubbed out fake login service.
   */
  authenticate(username: string, password: string): Observable<any> {
    // let url = 'http://localhost:3000/v1/user/auth';
    let url = 'http://localhost:8299/connect/token';
    let body = `client_id=lytx&grant_type=password&scope=email+profile+openid+hbs&username=${username}&password=${password}&acr_values=idp:hbs+tenant:3`;
    // let payload = {
    //   username: username,
    //   password: password
    // };
    // let headers = new Headers({
    //   'Content-Type': 'application/json',
    // });
    let headers = new Headers({
      'Authorization': 'Basic bHl0eDozMWIwOGZhOC1lOTRkLTQwZTgtYWU5Zi02NzQxN2UzODNmZTg=',
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({
      headers: headers,
    });

    return this.http.post(url, body, options)
      .map(response => {
        this.authenticated = true;
        return response.json();
      });
  }

  rememberMe(): void {
    if(this.remember && this.user.username){
      window.localStorage[this.usernameCookie] = this.user.username
    }
    else if(!this.remember){
      delete window.localStorage[this.usernameCookie]
    }
  }
}
