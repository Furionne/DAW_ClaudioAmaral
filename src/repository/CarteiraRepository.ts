import Carteira from "../domain/Carteira";
import CarteiraSchema from "../schemas/CarteiraSchema";
import CarteiraMapper from "../mappers/CarteiraMapper";
import ICarteiraPersistence from "../dataschema/ICarteiraPersistence";

export default class CarteiraRepository {
  constructor() {}

  async save(umaCarteira: Carteira): Promise<Carteira> {
    console.log(
      "CarteiraRepository: save: " + JSON.stringify(umaCarteira)
    );

    let umaCarteiraDoc: ICarteiraPersistence =
      CarteiraMapper.toPersistence(umaCarteira);

    let result: ICarteiraPersistence = await CarteiraSchema.create(
      umaCarteiraDoc
    );

    return CarteiraMapper.toDomain(result);
  }

  async update(umaCarteira: Carteira): Promise<any> {
    console.log(
      "CarteiraRepository: save: " + JSON.stringify(umaCarteira)
    );

    let umaCarteiraDoc: ICarteiraPersistence =
      CarteiraMapper.toPersistence(umaCarteira);

    let result: ICarteiraPersistence | null =
      await CarteiraSchema.findOneAndUpdate(
        { codigo: umaCarteira.codigo },
        umaCarteiraDoc
      );

    if (result == null) return "Recomendação inexistente.";
    return CarteiraMapper.toDomain(result);
  }

  async findAll(): Promise<any> {
    console.log("CarteiraRepository: findAll ");

    const result: ICarteiraPersistence[] = await CarteiraSchema.find(
      {}
    );

    let final_result = result.map((x) => CarteiraMapper.toDomain(x));

    return final_result;
  }

  async findValidasByZona(id: string): Promise<any> {
    console.log(
      "CarteiraRepository: findValidasByZona: " + JSON.stringify(id)
    );

    const result: ICarteiraPersistence[] =
      await CarteiraSchema.aggregate([
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
    let final_result = result.map((x) => CarteiraMapper.toDomain(x));
    return final_result;
  }

  async deleteByCodigo(id: string): Promise<boolean> {
    console.log("CarteiraRepository: deleteById: " + JSON.stringify(id));

    const result: any = await CarteiraSchema.deleteOne({ codigo: id });

    return result.acknowledged;
  }
}
