import { Component, OnInit } from '@angular/core';
import { Carteira } from '../../../models/carteira.model';
import { CarteiraService } from '../../../services/carteira/carteira.service';
@Component({
  selector: 'app-add-carteira',
  templateUrl: './add-carteira.component.html',
  styleUrls: ['./add-carteira.component.css'],
})
export class AddCarteiraComponent implements OnInit {
  carteira: Carteira = {
    codCarteira: '',
    designation: '',
    codTitulo: '',
    codCotacao: '',
  };
  submitted = false;
  constructor(private carteiraService: CarteiraService) {}
  ngOnInit(): void {}
  saveCarteira(carteira: Carteira): void {
    this.carteiraService.create(carteira).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }
  newCarteira(): void {
    this.submitted = false;
    this.carteira = {
      codCarteira: '',
      designation: '',
      codTitulo: '',
      codCotacao: '',
    };
  }
}
