import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCenter3Component } from './menu-center3.component';

describe('MenuCenter3Component', () => {
  let component: MenuCenter3Component;
  let fixture: ComponentFixture<MenuCenter3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCenter3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCenter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
