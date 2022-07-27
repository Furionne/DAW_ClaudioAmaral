import CarteiraRoute from "./CarteiraRoute";
import CotacaoRoute from "./CotacaoRoute";
import TituloRoute from "./TituloRoute";
import Middleware from "../middleware/middleware";

export default class Routes {
  private _carteira: CarteiraRoute;
  private _cotacao: CotacaoRoute;
  private _titulo: TituloRoute;
  private _middleware: Middleware;
 
  constructor() {
    this._carteira = new CarteiraRoute();
    this._cotacao = new CotacaoRoute();
    this._titulo = new TituloRoute();
    this._middleware = new Middleware;
    
  }

  get carteira(): CarteiraRoute {
    return this._carteira;
  }
  get cotacao(): CotacaoRoute {
    return this._cotacao;
  }
  get titulo(): TituloRoute {
    return this._titulo;
  }
  get middleware(): Middleware {
    return this._middleware;
  }
 
}
