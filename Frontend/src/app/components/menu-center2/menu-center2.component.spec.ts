import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCenter2Component } from './menu-center2.component';

describe('MenuCenter2Component', () => {
  let component: MenuCenter2Component;
  let fixture: ComponentFixture<MenuCenter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCenter2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCenter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
