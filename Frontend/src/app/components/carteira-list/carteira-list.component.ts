import { Component, OnInit } from '@angular/core';
import { Carteira } from '../../models/carteira.model';
import { CarteiraService } from '../../services/carteira/carteira.service';
@Component({
  selector: 'app-carteira-list',
  templateUrl: './carteira-list.component.html',
  styleUrls: ['./carteira-list.component.css']
})
export class CarteiraListComponent implements OnInit {
  carteiras?: Carteira[];
  currentCarteira: Carteira = {
    codCarteira: '',
    designation: '',
    codTitulo: '',
    codCotacao: ''
  };
  currentIndex = -1;
  title = '';
  constructor(private carteiraService: CarteiraService) { }
  ngOnInit(): void {
    this.retrieveCarteiras();
  }
  retrieveCarteiras(): void {
    this.carteiraService.getAll()
      .subscribe({
        next: (data) => {
          this.carteiras = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveCarteiras();
    this.currentCarteira = {
      codCarteira: '',
      designation: '',
      codTitulo: '',
      codCotacao: ''
    };
    this.currentIndex = -1;
  }
  setActiveCarteira(carteira: Carteira, index: number): void {
    this.currentCarteira = carteira;
    this.currentIndex = index;
  }
  removeAllCarteiras(): void {
    this.carteiraService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchCodCarteira(codCarteira: string): void {
    this.currentIndex = -1;
    this.carteiraService.get(codCarteira)
      .subscribe({
        next: (data: Carteira[] | undefined) => {
          this.carteiras = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }
}