import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderConfigPageThreeComponent } from './provider-config-page-three.component';

describe('ProviderConfigPageThreeComponent', () => {
  let component: ProviderConfigPageThreeComponent;
  let fixture: ComponentFixture<ProviderConfigPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderConfigPageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderConfigPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
