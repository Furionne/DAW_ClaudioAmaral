import { Component, OnInit } from '@angular/core';
import { Cotacao } from '../../models/cotacao.model';
import { CotacaoService } from '../../services/cotacao/cotacao.service';
@Component({
  selector: 'app-add-cotacao',
  templateUrl: './add-cotacao.component.html',
  styleUrls: ['./add-cotacao.component.css']
})
export class AddCotacaoComponent implements OnInit {
  cotacao: Cotacao = {
    codCotacao: '',
    codCarteira: '',
    designation: '',
    value: '',
  };
  submitted = false;
  constructor(private cotacaoService: CotacaoService) { }
  ngOnInit(): void {
  }
  saveCotacao(cotacao: Cotacao): void {

    this.cotacaoService.create( cotacao )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newCotacao(): void {
    this.submitted = false;
    this.cotacao = {
      codCotacao: '',
    codCarteira: '',
    designation: '',
    value: '',
    };
  }
}

