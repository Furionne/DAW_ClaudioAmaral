import ICarteiraDTO from "../dto/ICarteiraDTO";
import ICarteiraPersistence from "../dataschema/ICarteiraPersistence";

export default class Carteira {
  codigo: string;
  zona: string;
  dataNota: Date;
  validadeNota: Date;
  descricao: string;

  private constructor(
    codigo: string,
    zona: string,
    dataNota: Date,
    validadeNota: Date,
    descricao: string
  ) {
    this.codigo = codigo;
    this.zona = zona;
    this.dataNota = dataNota;
    this.validadeNota = validadeNota;
    this.descricao = descricao;
  }

  public static create(
    carteira: ICarteiraDTO | ICarteiraPersistence
  ): Carteira {
    return new Carteira(
      carteira.codigo,
      carteira.zona,
      carteira.dataNota,
      carteira.validadeNota,
      carteira.descricao
    );
  }
}
