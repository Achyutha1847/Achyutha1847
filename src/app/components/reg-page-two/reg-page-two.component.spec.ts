import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPageTwoComponent } from './reg-page-two.component';

describe('RegPageTwoComponent', () => {
  let component: RegPageTwoComponent;
  let fixture: ComponentFixture<RegPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
