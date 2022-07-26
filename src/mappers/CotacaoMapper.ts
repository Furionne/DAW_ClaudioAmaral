import ICotacaoPersistence from "../dataschema/ICotacaoPersistence";
import ICotacaoDTO from "../dto/ICotacaoDTO";
import Cotacao from "../domain/Cotacao";

//inicialmente isto estava implementado como class com metodos estaticos....

export default {
  toDTO(cotacao: Cotacao | null): ICotacaoDTO | null {
    if (cotacao == null) return null;
    return {
        codCotacao: cotacao.codCotacao,
        designation: cotacao.designation,
        codCarteira: cotacao.codCarteira,
        value: cotacao.value,
    } as ICotacaoDTO;
  },

  toPersistence(cotacao: Cotacao): any {
    return {
        codCotacao: cotacao.codCotacao,
        designation: cotacao.designation,
        codCarteira: cotacao.codCarteira,
        value: cotacao.value,
    };
  },

  toDomain(
    cotacao: ICotacaoDTO | ICotacaoPersistence
  ): Cotacao {
    return Cotacao.create(cotacao);
  },
};
