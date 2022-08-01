import { Component, OnInit } from '@angular/core';
import { Carteira } from 'app/models/carteira.model';
import { CarteiraService } from 'app/services/carteira/carteira.service';

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

  createRecipe() {
    this.dialog.open(RecipeCreateComponent, {});
  }

  // addCarteira(carteira: Carteira) {
  //   this.carteiraService.create(carteira).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.submitted = true;
  //     },
  //     error: (e) => console.error(e),
  //   });
  // }
}
