import ICotacaoDTO from "../dto/ICotacaoDTO";
import ICotacaoPersistence from "../dataschema/ICotacaoPersistence";

export default class Cotacao {
    codCotacao: string;
    codCarteira: string;
    designation: string;
    value: string;

  private constructor(
    codCotacao: string,
    designation: string,
    codCarteira: string,
    value: string,
  ) {
    this.codCotacao = codCotacao;
    this.designation = designation;
    this.codCarteira = codCarteira;
    this.value = value;
  }

  public static create(
    cotacao: ICotacaoDTO | ICotacaoPersistence
  ): Cotacao {
    return new Cotacao(
        cotacao.codCotacao,
        cotacao.designation,
      cotacao.codCarteira,
      cotacao.value,
    );
  }
}
