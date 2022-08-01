import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'app/models/titulo.model';
import { TituloService } from '../../services/titulo/titulo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-titulo-details',
  templateUrl: './titulo-details.component.html',
  styleUrls: ['./titulo-details.component.css']
})
export class TituloDetailsComponent {
  // @Input() viewMode = true;
  // @Input() currentTitulo: Titulo = {
  //   codTitulo: '',
  //   designation: '',
  //   codCarteira: '',
 
   
  // }
  //   message = '';

  //   constructor(
  //     private tituloService: TituloService,
  //     private route: ActivatedRoute,
  //     private router: Router) { }

  //   ngOnInit(): void {
  //     if (!this.viewMode) {
  //       this.message = '';
  //       this.getTitulo(this.route.snapshot.params["codTitulo"]);
  //     }
  //   }
  //   getTitulo(codTitulo: string): void {
  //     this.tituloService.get(codTitulo)
  //       .subscribe({
  //         next: (data) => {
  //           this.currentTitulo = data;
  //           console.log(data);
  //         },
  //         error: (e) => console.error(e)
  //       });
  //   }
  //   updatePublished(): void {
  //     const data = {
  //       codTitulo: this.currentTitulo.codTitulo,
  //       designation: this.currentTitulo.designation,
  //       codCarteira: this.currentTitulo.codCarteira,
  //     };
  //     this.message = '';
  //     this.tituloService.update(data)
  //       .subscribe({
  //         next: (res) => {
  //           console.log(res);
  //           this.currentTitulo= res;
  //           this.message = res.message ? res.message : 'The status was updated successfully!';
  //         },
  //         error: (e) => console.error(e)
  //       });
  //   }
  //   updateTitulo(): void {
  //     this.message = '';
  //     this.tituloService.update(this.currentTitulo)
  //       .subscribe({
  //         next: (res) => {
  //           console.log(res);
  //           this.message = res.message ? res.message : 'This titulo was updated successfully!';
  //         },
  //         error: (e) => console.error(e)
  //       });
  //   }
  //   deleteTitulo(): void {
  //     this.tituloService.delete(this.currentTitulo.codTitulo)
  //       .subscribe({
  //         next: (res) => {
  //           console.log(res);
  //           this.router.navigate(['/titulos']);
  //         },
  //         error: (e) => console.error(e)
  //       });
  //   }
  }
