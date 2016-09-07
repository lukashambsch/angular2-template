import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import { User } from './User';


@Injectable()
export class AuthService {
  public authenticated: boolean;
  public user: User;

  constructor() {
    this.user = new User();
  }

  /**
   *  Stubbed out fake login service.
   */
  authenticate(username: string, password: string): Observable<boolean> {
    this.user.username = username;
    this.authenticated = true;
    return Observable.from([this.authenticated]);
  }
}

