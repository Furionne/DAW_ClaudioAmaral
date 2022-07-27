import ITituloPersistence from "../dataschema/ITituloPersistence";
import ITituloDTO from "../dto/ITituloDTO";
import Titulo from "../domain/Titulo";


export default {
  toDTO(titulo: Titulo | null): ITituloDTO | null {
    if (titulo == null) return null;
    return {
        codTitulo: titulo.codTitulo,
        designation: titulo.designation,
        codCarteira: titulo.codCarteira,
    } as ITituloDTO;
  },

  toPersistence(titulo: Titulo): any {
    return {
        codTitulo: titulo.codTitulo,
        designation: titulo.designation,
        codCarteira: titulo.codCarteira,
    };
  },

  toDomain(
    titulo: ITituloDTO | ITituloPersistence
  ): Titulo {
    return Titulo.create(titulo);
  },
};
