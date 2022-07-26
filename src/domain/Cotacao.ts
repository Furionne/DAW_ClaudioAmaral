import ICotacaoDTO from "../dto/ICotacaoDTO";
import ICotacaoPersistence from "../dataschema/ICotacaoPersistence";

export default class Cotacao {
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
    cotacao: ICotacaoDTO | ICotacaoPersistence
  ): Cotacao {
    return new Cotacao(
      cotacao.codigo,
      cotacao.zona,
      cotacao.dataNota,
      cotacao.validadeNota,
      cotacao.descricao
    );
  }
}
