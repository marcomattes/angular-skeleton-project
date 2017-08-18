import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';

import LoginHistoryComponent from './login-history.component';
import { LoginHistoryRoute } from './routes';
import LoginHistoryService from "./login-history.service";

describe(`LoginHistoryComponentTests`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginHistoryComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [LoginHistoryService]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    const fixture = TestBed.createComponent(LoginHistoryComponent);

    expect(fixture).to.exist;
    expect(fixture.componentRef).to.exist;
  });

  it('should display title and logins', () => {
    const fixture = TestBed.createComponent(LoginHistoryComponent);

    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('div.container > h3'));
    expect(heading.nativeElement.textContent).to.contain(LoginHistoryRoute.title);

    const tableBody = fixture.debugElement.query(By.css('table.table > tbody'));
    expect(tableBody.children.length).to.equal(3);
  });
});
