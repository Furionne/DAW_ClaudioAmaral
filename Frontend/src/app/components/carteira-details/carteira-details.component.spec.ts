import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraDetailsComponent } from './carteira-details.component';

describe('CarteiraDetailsComponent', () => {
  let component: CarteiraDetailsComponent;
  let fixture: ComponentFixture<CarteiraDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteiraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
