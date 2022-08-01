import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cotacao } from 'app/models/cotacao.model';
import { CotacaoService } from 'app/services/cotacao/cotacao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cotacao-details',
  templateUrl: './cotacao-details.component.html',
  styleUrls: ['./cotacao-details.component.css'],
})
export class CotacaoDetailsComponent {
  @Input() viewMode = true;
  @Input() currentCotacao: Cotacao = {
    codCotacao: '',
    designation: '',
    codCarteira: '',
    value: '',
  };
  message = '';

  // constructor(
  //   private cotacaoService: CotacaoService,
  //   private route: ActivatedRoute,
  //   private router: Router) { }

  // ngOnInit(): void {
  //   if (!this.viewMode) {
  //     this.message = '';
  //     this.getCotacao(this.route.snapshot.params["codCotacao"]);
  //   }
  // }
  // getCotacao(codCotacao: string): void {
  //   this.cotacaoService.get(codCotacao)
  //     .subscribe({
  //       next: (data) => {
  //         this.currentCotacao = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  // updatePublished(): void {
  //   const data = {
  //     codCotacao: this.currentCotacao.codCotacao,
  //     designation: this.currentCotacao.designation,
  //     codCarteira: this.currentCotacao.codCarteira,
  //     value: this.currentCotacao.value,
  //   };
  //   this.message = '';
  //   this.cotacaoService.update(data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.currentCotacao= res;
  //         this.message = res.message ? res.message : 'The status was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  // updateCotacao(): void {
  //   this.message = '';
  //   this.cotacaoService.update(this.currentCotacao)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.message = res.message ? res.message : 'This cotacao was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  // deleteCotacao(): void {
  //   this.cotacaoService.delete(this.currentCotacao.codCotacao)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.router.navigate(['/cotacao']);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
}
