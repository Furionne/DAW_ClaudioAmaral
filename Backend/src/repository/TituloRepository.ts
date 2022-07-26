import Titulo from "../domain/Titulo";
import TituloSchema from "../schemas/TituloSchema";
import TituloMapper from "../mappers/TituloMapper";
import ITituloPersistence from "../dataschema/ITituloPersistence";

export default class TituloRepository {
  constructor() {}

  async save(umaTitulo: Titulo): Promise<Titulo> {
    console.log(
      "TituloRepository: save: " + JSON.stringify(umaTitulo)
    );

    let umaTituloDoc: ITituloPersistence =
      TituloMapper.toPersistence(umaTitulo);

    let result: ITituloPersistence = await TituloSchema.create(
      umaTituloDoc
    );

    return TituloMapper.toDomain(result);
  }

  async update(umaTitulo: Titulo): Promise<any> {
    console.log(
      "TituloRepository: save: " + JSON.stringify(umaTitulo)
    );

    let umaTituloDoc: ITituloPersistence =
      TituloMapper.toPersistence(umaTitulo);

    let result: ITituloPersistence | null =
      await TituloSchema.findOneAndUpdate(
        { codigo: umaTitulo.codTitulo },
        umaTituloDoc
      );

    if (result == null) return "Titulo inexistente.";
    return TituloMapper.toDomain(result);
  }

  async findAll(): Promise<any> {
    console.log("TituloRepository: findAll ");

    const result: ITituloPersistence[] = await TituloSchema.find(
      {}
    );

    let final_result = result.map((x) => TituloMapper.toDomain(x));

    return final_result;
  }

  async findByCod(id: string): Promise<any | null> {
    console.log("TituloRepository: findByName: " + JSON.stringify(id));

    const result = await TituloSchema.findOne({ codTitulo: id });

    if (result == null) return null;

    return TituloMapper.toDomain(result);
  }


  async deleteByCod(id: string): Promise<boolean> {
    console.log("TituloRepository: deleteById: " + JSON.stringify(id));

    const result: any = await TituloSchema.deleteOne({ codTitulo: id });

    return result.acknowledged;
  }
}
