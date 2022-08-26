import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderConfigPageFourComponent } from './provider-config-page-four.component';

describe('ProviderConfigPageFourComponent', () => {
  let component: ProviderConfigPageFourComponent;
  let fixture: ComponentFixture<ProviderConfigPageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderConfigPageFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderConfigPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
