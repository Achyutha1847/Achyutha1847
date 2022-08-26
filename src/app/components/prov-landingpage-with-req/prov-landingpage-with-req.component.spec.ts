import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvLandingpageWithReqComponent } from './prov-landingpage-with-req.component';

describe('ProvLandingpageWithReqComponent', () => {
  let component: ProvLandingpageWithReqComponent;
  let fixture: ComponentFixture<ProvLandingpageWithReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvLandingpageWithReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvLandingpageWithReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
