import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRegPageComponent } from './first-reg-page.component';

describe('FirstRegPageComponent', () => {
  let component: FirstRegPageComponent;
  let fixture: ComponentFixture<FirstRegPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstRegPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
