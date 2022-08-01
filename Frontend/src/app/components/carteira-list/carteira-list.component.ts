import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Carteira } from 'app/models/carteira.model';
import { CarteiraService } from 'app/services/carteira/carteira.service';
import { Observable } from 'rxjs';

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-carteira-list',
  styleUrls: ['./carteira-list.component.css'],
  templateUrl: './carteira-list.component.html',
})
export class CarteiraListComponent {
  carteiraList: Carteira[] = [];
  columnsToDisplay: string[] = [
    'codCarteira',
    'designation',
    'codTitulo',
    'codCotacao',
  ];
  displayedColumns: string[] = [
    'codCarteira',
    'designation',
    'codTitulo',
    'codCotacao',
  ];
  carteira: any;
  selectedCarteira: boolean = false;

  formCarteira = new Carteira();
  // clickedRows = new Set<CarteiraList>();
  constructor(private carteiraService: CarteiraService) {}

  ngOnInit(): void {
    this.getCarteiras();
  }

  getCarteiras(): void {
    this.carteiraService.getCarteiras().subscribe((carteira: any) => {
      this.carteiraList = carteira;
    });
  }

  selectCarteira(carteira: Carteira) {
    if (
      this.selectedCarteira &&
      this.formCarteira.codCarteira === carteira.codCarteira
    ) {
      this.selectedCarteira = false;
      this.formCarteira = new Carteira();
    } else {
      this.selectedCarteira = true;
      this.formCarteira = { ...carteira };
    }
  }

  add(codCarteira: string): void {
    codCarteira = codCarteira.trim();
    if (!codCarteira) {
      return;
    }
    this.carteiraService
      .addCarteira({ codCarteira } as Carteira)
      .subscribe((carteira) => {
        this.carteira.push(carteira);
      });
  }

  delete(carteira: Carteira): void {
    this.carteiraService
      .deleteCarteira(carteira.codCarteira)
      .subscribe((res) => {
        this.getCarteiras();
      });
  }

  onSubmit(f: NgForm) {
    if (f.valid && this.formCarteira.codCarteira) {
      console.log(this.formCarteira);
      let obs: Observable<Carteira>;
      if (this.selectedCarteira) {
        obs = this.carteiraService.updateCarteira(this.formCarteira);
      } else {
        obs = this.carteiraService.addCarteira(this.formCarteira);
      }

      obs.subscribe((res) => {
        this.getCarteiras();
        f.reset();
      });
    }
  }
}
