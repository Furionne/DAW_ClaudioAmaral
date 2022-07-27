import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCotacaoComponent } from './add-cotacao.component';

describe('AddCotacaoComponent', () => {
  let component: AddCotacaoComponent;
  let fixture: ComponentFixture<AddCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCotacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
