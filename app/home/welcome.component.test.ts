import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoute } from './routes';

describe(`WelcomeComponentTests`, () => {
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();
  });

  it('should display title and developer info', () => {
    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('div.container > div.row > h3'));
    expect(heading.nativeElement.textContent).toContain(WelcomeRoute.title);

    const body = fixture.debugElement.query(By.css('div.container'));
    expect(body.query(By.css('div.row > div')).nativeElement.textContent).toBe('Developed by:');
    expect(body.query(By.css('div.row > h4')).nativeElement.textContent).toBe('Skeeterdrums');
  });
});
