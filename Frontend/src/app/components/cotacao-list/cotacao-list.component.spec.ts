import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoListComponent } from './cotacao-list.component';

describe('CotacaoListComponent', () => {
  let component: CotacaoListComponent;
  let fixture: ComponentFixture<CotacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotacaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
