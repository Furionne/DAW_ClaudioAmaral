import { Component, OnInit } from '@angular/core';
import { Titulo } from '../../models/titulo.model';
import { TituloService } from '../../services/titulo/titulo.service';
@Component({
  selector: 'app-add-titulo',
  templateUrl: './add-titulo.component.html',
  styleUrls: ['./add-titulo.component.css'],
})
export class AddTituloComponent {
  // titulo: Titulo = {
  //   codTitulo: '',
  //   designation: '',
  //   codCarteira: '',
  // };
  // submitted = false;
  // constructor(private tituloService: TituloService) { }
  //   ngOnInit(): void {
  //   }
  //   saveTitulo(t: any): void {
  //     const titulo = {
  //       codTitulo: t.codTitulo,
  //       designation: t.designation,
  //       codCarteira: t.codCarteira,
  //     }
  //     this.tituloService.create( titulo )
  //       .subscribe({
  //         next: (res) => {
  //           console.log(res);
  //           this.submitted = true;
  //         },
  //         error: (e) => console.error(e)
  //       });
  //   }
  //   newTitulo(): void {
  //     this.submitted = false;
  //     this.titulo = {
  //       codTitulo: '',
  //       designation: '',
  //       codCarteira: '',
  //     };
  //   }
}
