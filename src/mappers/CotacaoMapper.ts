import ICotacaoPersistence from "../dataschema/ICotacaoPersistence";
import ICotacaoDTO from "../dto/ICotacaoDTO";
import Cotacao from "../domain/Cotacao";

//inicialmente isto estava implementado como class com metodos estaticos....

export default {
  toDTO(cotacao: Cotacao | null): ICotacaoDTO | null {
    if (cotacao == null) return null;
    return {
      codigo: cotacao.codigo,
      zona: cotacao.zona,
      dataNota: cotacao.dataNota,
      validadeNota: cotacao.validadeNota,
      descricao: cotacao.descricao,
    } as ICotacaoDTO;
  },

  toPersistence(cotacao: Cotacao): any {
    return {
      codigo: cotacao.codigo,
      zona: cotacao.zona,
      dataNota: cotacao.dataNota,
      validadeNota: cotacao.validadeNota,
      descricao: cotacao.descricao,
    };
  },

  toDomain(
    cotacao: ICotacaoDTO | ICotacaoPersistence
  ): Cotacao {
    return Cotacao.create(cotacao);
  },
};
