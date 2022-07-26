import ITituloPersistence from "../dataschema/ITituloPersistence";
import ITituloDTO from "../dto/ITituloDTO";
import Titulo from "../domain/Titulo";

//inicialmente isto estava implementado como class com metodos estaticos....

export default {
  toDTO(titulo: Titulo | null): ITituloDTO | null {
    if (titulo == null) return null;
    return {
      codigo: titulo.codigo,
      zona: titulo.zona,
      dataNota: titulo.dataNota,
      validadeNota: titulo.validadeNota,
      descricao: titulo.descricao,
    } as ITituloDTO;
  },

  toPersistence(titulo: Titulo): any {
    return {
      codigo: titulo.codigo,
      zona: titulo.zona,
      dataNota: titulo.dataNota,
      validadeNota: titulo.validadeNota,
      descricao: titulo.descricao,
    };
  },

  toDomain(
    titulo: ITituloDTO | ITituloPersistence
  ): Titulo {
    return Titulo.create(titulo);
  },
};
