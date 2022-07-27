import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloDetailsComponent } from './titulo-details.component';

describe('TituloDetailsComponent', () => {
  let component: TituloDetailsComponent;
  let fixture: ComponentFixture<TituloDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
