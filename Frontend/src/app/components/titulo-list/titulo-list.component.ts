import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Titulo } from 'app/models/titulo.model';
import { TituloService } from 'app/services/titulo/titulo.service';
import { Observable } from 'rxjs';

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-titulo-list',
  styleUrls: ['./titulo-list.component.css'],
  templateUrl: './titulo-list.component.html',
})
export class TituloListComponent {
  tituloList: Titulo[] = [];
  columnsToDisplay: string[] = ['codTitulo', 'designation', 'codCarteira'];
  displayedColumns: string[] = ['codTitulo', 'designation', 'codCarteira'];
  titulo: any;
  selectedTitulo: boolean = false;

  formTitulo = new Titulo();
  // clickedRows = new Set<TituloList>();
  constructor(private tituloService: TituloService) {}

  ngOnInit(): void {
    this.getTitulos();
  }

  getTitulos(): void {
    this.tituloService.getTitulos().subscribe((titulo: any) => {
      this.tituloList = titulo;
    });
  }

  selectTitulo(titulo: Titulo) {
    if (this.selectedTitulo && this.formTitulo.codTitulo === titulo.codTitulo) {
      this.selectedTitulo = false;
      this.formTitulo = new Titulo();
    } else {
      this.selectedTitulo = true;
      this.formTitulo = { ...titulo };
    }
  }

  add(codTitulo: string): void {
    codTitulo = codTitulo.trim();
    if (!codTitulo) {
      return;
    }
    this.tituloService
      .addTitulo({ codTitulo } as Titulo)
      .subscribe((titulo) => {
        this.titulo.push(titulo);
      });
  }

  onSubmit(f: NgForm) {
    if (f.valid && this.formTitulo.codTitulo) {
      console.log(this.formTitulo);
      let obs: Observable<Titulo>;
      if (this.selectedTitulo) {
        obs = this.tituloService.updateTitulo(this.formTitulo);
      } else {
        obs = this.tituloService.addTitulo(this.formTitulo);
      }

      obs.subscribe((res) => {
        this.getTitulos();
        f.reset();
      });
    }
  }
}
