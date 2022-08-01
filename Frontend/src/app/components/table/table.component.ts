//edit last

import { Component } from '@angular/core';
import { Carteira } from 'app/models/carteira.model';
import { CarteiraService } from 'app/services/carteira/carteira.service';

export interface CarteiraList {
  carteira: string;
  position: number;
  valor: number;
  designation: string;
}

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'carteira', 'value', 'designation'];
  clickedRows = new Set<CarteiraList>();
  carteiraList: Carteira[] = [];
  constructor(private carteiraService: CarteiraService) {}

  ngOnInit(): void {
    this.getCarteiras();
  }

  getCarteiras() {
    this.carteiraService.getCarteiras().subscribe((carteira: any) => {
      this.carteiraList = carteira;
    });
  }
}
