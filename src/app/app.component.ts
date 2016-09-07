import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { AuthService } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  viewProviders: [AuthService, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
