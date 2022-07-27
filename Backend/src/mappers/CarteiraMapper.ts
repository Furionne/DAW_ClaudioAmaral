import ICarteiraPersistence from "../dataschema/ICarteiraPersistence";
import ICarteiraDTO from "../dto/ICarteiraDTO";
import Carteira from "../domain/Carteira";


export default {
  toDTO(carteira: Carteira | null): ICarteiraDTO | null {
    if (carteira == null) return null;
    return {

      codCarteira: carteira.codCarteira,
      designation: carteira.designation,
      codTitulo: carteira.codTitulo,
      codCotacao: carteira.codCotacao,



    } as ICarteiraDTO;
  },

  toPersistence(carteira: Carteira): any {
    return {
        codCarteira: carteira.codCarteira,
        designation: carteira.designation,
        codTitulo: carteira.codTitulo,
        codCotacao: carteira.codCotacao,
    };
  },

  toDomain(
    carteira: ICarteiraDTO | ICarteiraPersistence
  ): Carteira {
    return Carteira.create(carteira);
  },
};
