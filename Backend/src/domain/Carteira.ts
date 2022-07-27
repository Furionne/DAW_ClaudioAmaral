import ICarteiraDTO from "../dto/ICarteiraDTO";
import ICarteiraPersistence from "../dataschema/ICarteiraPersistence";

export default class Carteira {
    codCarteira: string;
    designation: string;
    codTitulo: string;
    codCotacao: string;


  private constructor(
    codCarteira: string,
    designation: string,
    codTitulo: string,
    codCotacao: string,

  ) {
    this.codCarteira = codCarteira;
    this.designation = designation;
    this.codTitulo = codTitulo;
    this.codCotacao = codCotacao;
  }

  public static create(
    carteira: ICarteiraDTO | ICarteiraPersistence
  ): Carteira {
    return new Carteira(
      carteira.codCarteira,
      carteira.designation,
      carteira.codTitulo,
      carteira.codCotacao,
    );
  }
}
