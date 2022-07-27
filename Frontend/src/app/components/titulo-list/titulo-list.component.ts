import { Component, OnInit } from '@angular/core';
import { Titulo } from '../../models/titulo.model';
import { TituloService } from '../../services/titulo/titulo.service';
@Component({
  selector: 'app-titulo-list',
  templateUrl: './titulo-list.component.html',
  styleUrls: ['./titulo-list.component.css']
})
export class TituloListComponent implements OnInit {
  titulos?: Titulo[];
  currentTitulo: Titulo = {
    codTitulo: '',
    designation: '',
    codCarteira: '',
  };
  currentIndex = -1;
  title = '';
  constructor(private tituloService: TituloService) { }
  ngOnInit(): void {
    this.retrieveTitulos();
  }
  retrieveTitulos(): void {
    this.tituloService.getAll()
      .subscribe({
        next: (data) => {
          this.titulos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveTitulos();
    this.currentTitulo = {
      codTitulo: '',
      designation: '',
      codCarteira: '',
    };
    this.currentIndex = -1;
  }
  setActiveTitulo(titulo: Titulo, index: number): void {
    this.currentTitulo = titulo;
    this.currentIndex = index;
  }
  removeAllTitulos(): void {
    this.tituloService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchCodTitulo(codTitulo: string): void {
    this.currentIndex = -1;
    this.tituloService.get(codTitulo)
      .subscribe({
        next: (data: Titulo[] | undefined) => {
          this.titulos = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }
}