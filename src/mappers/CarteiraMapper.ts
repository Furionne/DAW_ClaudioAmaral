import ICarteiraPersistence from "../dataschema/ICarteiraPersistence";
import ICarteiraDTO from "../dto/ICarteiraDTO";
import Carteira from "../domain/Carteira";

//inicialmente isto estava implementado como class com metodos estaticos....

export default {
  toDTO(carteira: Carteira | null): ICarteiraDTO | null {
    if (carteira == null) return null;
    return {
      codigo: carteira.codigo,
      zona: carteira.zona,
      dataNota: carteira.dataNota,
      validadeNota: carteira.validadeNota,
      descricao: carteira.descricao,
    } as ICarteiraDTO;
  },

  toPersistence(carteira: Carteira): any {
    return {
      codigo: carteira.codigo,
      zona: carteira.zona,
      dataNota: carteira.dataNota,
      validadeNota: carteira.validadeNota,
      descricao: carteira.descricao,
    };
  },

  toDomain(
    carteira: ICarteiraDTO | ICarteiraPersistence
  ): Carteira {
    return Carteira.create(carteira);
  },
};
