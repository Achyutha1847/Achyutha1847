import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPageThreeComponent } from './reg-page-three.component';

describe('RegPageThreeComponent', () => {
  let component: RegPageThreeComponent;
  let fixture: ComponentFixture<RegPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
