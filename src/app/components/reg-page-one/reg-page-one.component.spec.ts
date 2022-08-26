import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPageOneComponent } from './reg-page-one.component';

describe('RegPageOneComponent', () => {
  let component: RegPageOneComponent;
  let fixture: ComponentFixture<RegPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
