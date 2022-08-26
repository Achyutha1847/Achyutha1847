import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLandingPageComponent } from './provider-landing-page.component';

describe('ProviderLandingPageComponent', () => {
  let component: ProviderLandingPageComponent;
  let fixture: ComponentFixture<ProviderLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
