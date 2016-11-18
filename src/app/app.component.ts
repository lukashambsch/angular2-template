import { Component } from '@angular/core';

import { AuthService } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  viewProviders: [AuthService],
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
