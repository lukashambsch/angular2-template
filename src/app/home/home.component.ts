import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { AuthService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class HomeComponent implements OnInit {

  newName: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public router: Router,
              public authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.authenticated) {
      this.router.navigate(['/login']);
    }
  }

}
