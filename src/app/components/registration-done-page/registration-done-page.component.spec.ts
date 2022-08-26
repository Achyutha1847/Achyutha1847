import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDonePageComponent } from './registration-done-page.component';

describe('RegistrationDonePageComponent', () => {
  let component: RegistrationDonePageComponent;
  let fixture: ComponentFixture<RegistrationDonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
