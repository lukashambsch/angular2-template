/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { addProviders, async, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../shared/index';

describe('Component: Login', () => {
  addProviders([
    AuthService,
    Router
  ]);

  //it('should create an instance', inject([Router, AuthService], (router, authService) => {
    //let component = new LoginComponent(router, authService);
    //expect(component).toBeTruthy();
  //}));
});
