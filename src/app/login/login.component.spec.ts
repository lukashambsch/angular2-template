/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { AuthService } from '../shared/index';

describe('Component: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        AuthService
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpModule
      ]
    })
  });

  it('should create an instance', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    let login = fixture.debugElement.componentInstance;
    expect(login).toBeTruthy();
  }));
});
