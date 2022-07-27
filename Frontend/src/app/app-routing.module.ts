import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteirasComponent } from './entidades/carteiras/carteiras.component';
import { AddCarteiraComponent } from './components/carteira/add-carteira/add-carteira.component';
import { CarteiraDetailsComponent } from './components/carteira-details/carteira-details.component';
import { CarteiraListComponent } from './components/carteira-list/carteira-list.component';
import { CotacoesComponent } from './entidades/cotacoes/cotacoes.component';
import { LoginComponent } from './components/login/login.component';
import { TitulosComponent } from './entidades/titulos/titulos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'carteiras', component: CarteiraListComponent },
  { path: 'carteiras/:id', component: CarteiraDetailsComponent},
  { path: 'add', component: AddCarteiraComponent},
  { path: 'cotacoes', component: CotacoesComponent},
  { path: 'titulos', component: TitulosComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
