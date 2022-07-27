import ITituloDTO from "../dto/ITituloDTO";
import ITituloPersistence from "../dataschema/ITituloPersistence";

export default class Titulo {
    codTitulo: string;
    designation: string;
    codCarteira: string;


  private constructor(
      codTitulo: string,
      designation: string,
    codCarteira: string,
  ) {
      this.codTitulo = codTitulo;
      this.designation = designation;
    this.codCarteira = codCarteira;

  }

  public static create(
    titulo: ITituloDTO | ITituloPersistence
  ): Titulo {
    return new Titulo(
        titulo.codTitulo,
        titulo.designation,
      titulo.codCarteira,

    );
  }
}
