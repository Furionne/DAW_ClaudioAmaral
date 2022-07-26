import ITituloDTO from "../dto/ITituloDTO";
import ITituloPersistence from "../dataschema/ITituloPersistence";

export default class Titulo {
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
    titulo: ITituloDTO | ITituloPersistence
  ): Titulo {
    return new Titulo(
      titulo.codigo,
      titulo.zona,
      titulo.dataNota,
      titulo.validadeNota,
      titulo.descricao
    );
  }
}
