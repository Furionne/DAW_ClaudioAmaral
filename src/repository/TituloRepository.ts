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
        { codigo: umaTitulo.codigo },
        umaTituloDoc
      );

    if (result == null) return "Recomendação inexistente.";
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

  async findValidasByZona(id: string): Promise<any> {
    console.log(
      "TituloRepository: findValidasByZona: " + JSON.stringify(id)
    );

    const result: ITituloPersistence[] =
      await TituloSchema.aggregate([
        {
          $project: {
            _id: 0,
            codigo: 1,
            zona: 1,
            dataNota: 1,
            validadeNota: 1,
            descricao: 1,
            dataValidade: {
              $dateAdd: {
                startDate: "$dataNota",
                unit: "day",
                amount: "$validadeNota",
              },
            },
          },
        },
        {
          $match: {
            dataValidade: {
              $gte: new Date(),
            },
            zona: id,
          },
        },
      ]);

    if (result.length == 0)
      return "Não há recomendações válidas para a zona do pais introduzido.";
    let final_result = result.map((x) => TituloMapper.toDomain(x));
    return final_result;
  }

  async deleteByCodigo(id: string): Promise<boolean> {
    console.log("TituloRepository: deleteById: " + JSON.stringify(id));

    const result: any = await TituloSchema.deleteOne({ codigo: id });

    return result.acknowledged;
  }
}
