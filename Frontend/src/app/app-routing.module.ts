import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteirasComponent } from './entidades/carteiras/carteiras.component';
import { CotacoesComponent } from './entidades/cotacoes/cotacoes.component';
import { LoginComponent } from './components/login/login.component';
import { TitulosComponent } from './entidades/titulos/titulos.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainContainerComponent,
  },
  { path: 'carteiras', component: CarteirasComponent },
  { path: 'cotacoes', component: CotacoesComponent },
  { path: 'titulos', component: TitulosComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
