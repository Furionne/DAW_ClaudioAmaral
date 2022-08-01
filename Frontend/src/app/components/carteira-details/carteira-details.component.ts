import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Carteira } from 'app/models/carteira.model';
import { CarteiraService } from 'app/services/carteira/carteira.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carteira-details',
  templateUrl: './carteira-details.component.html',
  styleUrls: ['./carteira-details.component.css'],
})
export class CarteiraDetailsComponent {
  //   constructor(
  //     private carteiraService: CarteiraService,
  //     private route: ActivatedRoute,
  //     private location: Location
  //   ) {}
  //   ngOnInit(): void {
  //       this.getCarteira();
  //     }
  //   }
  //  getCarteira(): void {
  //   const codCarteira = parseInt(this.route.snapshot.paramMap.get('codCarteira')!);
  //     this.carteiraService.getCarteira(codCarteira)
  //       .subscribe(carteira => this.carteira = carteira);
}
