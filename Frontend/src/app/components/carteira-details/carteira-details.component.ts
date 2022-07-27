import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Carteira } from 'app/models/carteira.model';
import { CarteiraService } from 'app/services/carteira/carteira.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carteira-details',
  templateUrl: './carteira-details.component.html',
  styleUrls: ['./carteira-details.component.css']
})
export class CarteiraDetailsComponent implements OnInit {
  @Input() viewMode = true;
  @Input() currentCarteira: Carteira = {
    codCarteira: '',
    designation: '',
    codTitulo: '',
    codCotacao: '',
   
  }
    message = '';

    constructor(
      private carteiraService: CarteiraService,
      private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getCarteira(this.route.snapshot.params["codCarteira"]);
      }
    }
    getCarteira(codCarteira: string): void {
      this.carteiraService.get(codCarteira)
        .subscribe({
          next: (data) => {
            this.currentCarteira = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
    updatePublished(): void {
      const data = {
        codCarteira: this.currentCarteira.codCarteira,
        designation: this.currentCarteira.designation,
        codTitulo: this.currentCarteira.codTitulo,
        codCotacao: this.currentCarteira.codCotacao,
      };
      this.message = '';
      this.carteiraService.update(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.currentCarteira= res;
            this.message = res.message ? res.message : 'The status was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
    updateCarteira(): void {
      this.message = '';
      this.carteiraService.update(this.currentCarteira)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This carteira was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
    deleteCarteira(): void {
      this.carteiraService.delete(this.currentCarteira.codCarteira)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/carteiras']);
          },
          error: (e) => console.error(e)
        });
    }
  }
