import { Component, OnInit } from '@angular/core';
import { Cotacao } from '../../models/cotacao.model';
import { CotacaoService } from '../../services/cotacao/cotacao.service';
@Component({
  selector: 'app-cotacao-list',
  templateUrl: './cotacao-list.component.html',
  styleUrls: ['./cotacao-list.component.css']
})
export class CotacaoListComponent implements OnInit {
  cotacaos?: Cotacao[];
  currentCotacao: Cotacao = {
    codCotacao: '',
    designation: '',
    codCarteira: '',
    value: ''
  };
  currentIndex = -1;
  title = '';
  constructor(private cotacaoService: CotacaoService) { }
  ngOnInit(): void {
    this.retrieveCotacaos();
  }
  retrieveCotacaos(): void {
    this.cotacaoService.getAll()
      .subscribe({
        next: (data) => {
          this.cotacaos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveCotacaos();
    this.currentCotacao = {
      codCotacao: '',
      designation: '',
      codCarteira: '',
      value: ''
    };
    this.currentIndex = -1;
  }
  setActiveCotacao(cotacao: Cotacao, index: number): void {
    this.currentCotacao = cotacao;
    this.currentIndex = index;
  }
  removeAllCotacao(): void {
    this.cotacaoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchCodCotacao(codCotacao: string): void {
    this.currentIndex = -1;
    this.cotacaoService.get(codCotacao)
      .subscribe({
        next: (data: Cotacao[] | undefined) => {
          this.cotacaos = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }
}