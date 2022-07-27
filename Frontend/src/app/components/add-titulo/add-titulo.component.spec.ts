import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTituloComponent } from './add-titulo.component';

describe('AddTituloComponent', () => {
  let component: AddTituloComponent;
  let fixture: ComponentFixture<AddTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
