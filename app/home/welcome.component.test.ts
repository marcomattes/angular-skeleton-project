import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';

import WelcomeComponent from './welcome.component';
import { WelcomeRoute } from './routes';

describe(`WelcomeComponentTests`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    const fixture = TestBed.createComponent(WelcomeComponent);

    expect(fixture).to.exist;
    expect(fixture.componentRef).to.exist;
  });

  it('should display title and developer info', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);

    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('div.container > div.row > h3'));
    expect(heading.nativeElement.textContent).to.contain(WelcomeRoute.title);

    const body = fixture.debugElement.query(By.css('div.container'));
    expect(body.query(By.css('div.row > div')).nativeElement.textContent).to.equal('Developed by:');
    expect(body.query(By.css('div.row > h4')).nativeElement.textContent).to.equal('Skeeterdrums');
  });
});
