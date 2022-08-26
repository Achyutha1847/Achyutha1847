import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvStateSelectionComponent } from './prov-state-selection.component';

describe('ProvStateSelectionComponent', () => {
  let component: ProvStateSelectionComponent;
  let fixture: ComponentFixture<ProvStateSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvStateSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvStateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
