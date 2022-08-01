import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cotacao } from 'app/models/cotacao.model';
import { CotacaoService } from 'app/services/cotacao/cotacao.service';
import { Observable } from 'rxjs';

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-cotacao-list',
  styleUrls: ['./cotacao-list.component.css'],
  templateUrl: './cotacao-list.component.html',
})
export class CotacaoListComponent {
  cotacaoList: Cotacao[] = [];
  columnsToDisplay: string[] = [
    'codCotacao',
    'codCarteira',
    'designation',
    'value',
  ];
  displayedColumns: string[] = [
    'codCotacao',
    'codCarteira',
    'designation',
    'value',
  ];
  cotacao: any;
  selectedCotacao: boolean = false;

  formCotacao = new Cotacao();
  // clickedRows = new Set<CotacaoList>();
  constructor(private cotacaoService: CotacaoService) {}

  ngOnInit(): void {
    this.getCotacaos();
  }

  getCotacaos(): void {
    this.cotacaoService.getCotacaos().subscribe((cotacao: any) => {
      this.cotacaoList = cotacao;
    });
  }

  selectCotacao(cotacao: Cotacao) {
    if (
      this.selectedCotacao &&
      this.formCotacao.codCotacao === cotacao.codCotacao
    ) {
      this.selectedCotacao = false;
      this.formCotacao = new Cotacao();
    } else {
      this.selectedCotacao = true;
      this.formCotacao = { ...cotacao };
    }
  }

  add(codCotacao: string): void {
    codCotacao = codCotacao.trim();
    if (!codCotacao) {
      return;
    }
    this.cotacaoService
      .addCotacao({ codCotacao } as Cotacao)
      .subscribe((cotacao) => {
        this.cotacao.push(cotacao);
      });
  }

  delete(cotacao: Cotacao): void {
    this.cotacaoService.deleteCotacao(cotacao.codCotacao).subscribe((res) => {
      this.getCotacaos();
    });
  }

  onSubmit(f: NgForm) {
    if (f.valid && this.formCotacao.codCotacao) {
      console.log(this.formCotacao);
      let obs: Observable<Cotacao>;
      if (this.selectedCotacao) {
        obs = this.cotacaoService.updateCotacao(this.formCotacao);
      } else {
        obs = this.cotacaoService.addCotacao(this.formCotacao);
      }

      obs.subscribe((res) => {
        this.getCotacaos();
        f.reset();
      });
    }
  }
}
