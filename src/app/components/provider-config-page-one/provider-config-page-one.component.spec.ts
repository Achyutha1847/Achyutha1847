import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderConfigPageOneComponent } from './provider-config-page-one.component';

describe('ProviderConfigPageOneComponent', () => {
  let component: ProviderConfigPageOneComponent;
  let fixture: ComponentFixture<ProviderConfigPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderConfigPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderConfigPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
