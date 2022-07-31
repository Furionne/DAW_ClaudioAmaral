import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MenuCenterComponent } from './components/menu-center/menu-center.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { CarteirasComponent } from './entidades/carteiras/carteiras.component';
import { CotacoesComponent } from './entidades/cotacoes/cotacoes.component';
import { TitulosComponent } from './entidades/titulos/titulos.component';
import { AddCarteiraComponent } from './components/carteira/add-carteira/add-carteira.component';
import { CarteiraDetailsComponent } from './components/carteira-details/carteira-details.component';
import { CarteiraListComponent } from './components/carteira-list/carteira-list.component';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddCotacaoComponent } from './components/add-cotacao/add-cotacao.component';
import { CotacaoDetailsComponent } from './components/cotacao-details/cotacao-details.component';
import { CotacaoListComponent } from './components/cotacao-list/cotacao-list.component';
import { TituloListComponent } from './components/titulo-list/titulo-list.component';
import { AddTituloComponent } from './components/add-titulo/add-titulo.component';
import { TituloDetailsComponent } from './components/titulo-details/titulo-details.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Card2Component } from './components/card2/card2.component';
import { Card3Component } from './components/card3/card3.component';
import { Card4Component } from './components/card4/card.component';
import { Card5Component } from './components/card5/card5.component';
import { MenuCenter2Component } from './components/menu-center2/menu-center2.component';
import { MenuCenter3Component } from './components/menu-center3/menu-center3.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    CardComponent,
    MenuCenterComponent,
    CarteirasComponent,
    CotacoesComponent,
    TitulosComponent,
    AddCarteiraComponent,
    CarteiraDetailsComponent,
    CarteiraListComponent,
    LoginComponent,
    AddCotacaoComponent,
    CotacaoDetailsComponent,
    CotacaoListComponent,
    TituloListComponent,
    AddTituloComponent,
    TituloDetailsComponent,
    MainContainerComponent,
    TableComponent,
    NavbarComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    MenuCenter2Component,
    MenuCenter3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
