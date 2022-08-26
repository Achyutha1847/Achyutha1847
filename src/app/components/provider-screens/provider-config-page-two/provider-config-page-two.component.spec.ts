import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderConfigPageTwoComponent } from './provider-config-page-two.component';

describe('ProviderConfigPageTwoComponent', () => {
  let component: ProviderConfigPageTwoComponent;
  let fixture: ComponentFixture<ProviderConfigPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderConfigPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderConfigPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
