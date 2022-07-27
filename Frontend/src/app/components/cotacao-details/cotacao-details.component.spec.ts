import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoDetailsComponent } from './cotacao-details.component';

describe('CotacaoDetailsComponent', () => {
  let component: CotacaoDetailsComponent;
  let fixture: ComponentFixture<CotacaoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotacaoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotacaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
