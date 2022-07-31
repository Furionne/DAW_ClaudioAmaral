//edit last

import { Component } from '@angular/core';

export interface PeriodicElement {
  carteira: string;
  position: number;
  valor: number;
  designation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, carteira: 'carteira 1', valor: 1.0079, designation: 'C1' },
  { position: 2, carteira: 'carteira 2', valor: 4.0026, designation: 'C2' },
  { position: 3, carteira: 'carteira 3', valor: 6.941, designation: 'C3' },
  { position: 4, carteira: 'carteira 4', valor: 9.0122, designation: 'C4' },
  { position: 5, carteira: 'carteira 5', valor: 10.811, designation: 'C5' },
  { position: 6, carteira: 'carteira 6', valor: 12.0107, designation: 'C6' },
  { position: 7, carteira: 'carteira 7', valor: 14.0067, designation: 'C7' },
  { position: 8, carteira: 'carteira 8', valor: 15.9994, designation: 'C8' },
  { position: 9, carteira: 'carteira 9', valor: 18.9984, designation: 'C9' },
  { position: 10, carteira: 'carteira 10', valor: 20.1797, designation: 'C10' },
];

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'carteira', 'valor', 'designation'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}
