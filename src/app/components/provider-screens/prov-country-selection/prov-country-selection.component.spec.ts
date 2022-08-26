import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvCountrySelectionComponent } from './prov-country-selection.component';

describe('ProvCountrySelectionComponent', () => {
  let component: ProvCountrySelectionComponent;
  let fixture: ComponentFixture<ProvCountrySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvCountrySelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvCountrySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
