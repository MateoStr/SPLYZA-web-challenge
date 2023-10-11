import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProfileComponent } from './navbar-profile.component';

describe('NavbarProfileComponent', () => {
  let component: NavbarProfileComponent;
  let fixture: ComponentFixture<NavbarProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarProfileComponent]
    });
    fixture = TestBed.createComponent(NavbarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
