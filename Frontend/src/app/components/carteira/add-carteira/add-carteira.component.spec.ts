import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarteiraComponent } from './add-carteira.component';

describe('AddCarteiraComponent', () => {
  let component: AddCarteiraComponent;
  let fixture: ComponentFixture<AddCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarteiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
