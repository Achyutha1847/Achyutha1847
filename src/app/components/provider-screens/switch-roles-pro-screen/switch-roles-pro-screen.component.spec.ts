import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchRolesProScreenComponent } from './switch-roles-pro-screen.component';

describe('SwitchRolesProScreenComponent', () => {
  let component: SwitchRolesProScreenComponent;
  let fixture: ComponentFixture<SwitchRolesProScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchRolesProScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchRolesProScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
