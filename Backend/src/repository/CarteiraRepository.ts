import Carteira from "../domain/Carteira";
import CarteiraSchema from "../schemas/CarteiraSchema";
import CarteiraMapper from "../mappers/CarteiraMapper";
import ICarteiraPersistence from "../dataschema/ICarteiraPersistence";

export default class CarteiraRepository {
  constructor() {}

  async save(umaCarteira: Carteira): Promise<Carteira> {
    console.log("CarteiraRepository: save: " + JSON.stringify(umaCarteira));

    let umaCarteiraDoc: ICarteiraPersistence =
      CarteiraMapper.toPersistence(umaCarteira);

    let result: ICarteiraPersistence = await CarteiraSchema.create(
      umaCarteiraDoc
    );

    return CarteiraMapper.toDomain(result);
  }

  async update(umaCarteira: Carteira): Promise<any> {
    console.log("CarteiraRepository: save: " + JSON.stringify(umaCarteira));

    let { codCarteira, ...update }: ICarteiraPersistence =
      CarteiraMapper.toPersistence(umaCarteira);

    let result: ICarteiraPersistence | null =
      await CarteiraSchema.findOneAndUpdate({ codCarteira }, update, {
        new: true,
      });

    if (result == null) return "Recomendação inexistente.";
    return CarteiraMapper.toDomain(result);
  }

  async findAll(): Promise<any> {
    console.log("CarteiraRepository: findAll ");

    const result: ICarteiraPersistence[] = await CarteiraSchema.find({});

    let final_result = result.map((x) => CarteiraMapper.toDomain(x));

    return final_result;
  }

  async findByCod(id: string): Promise<any | null> {
    console.log("CarteiraRepository: findByName: " + JSON.stringify(id));

    const result = await CarteiraSchema.findOne({ codCarteira: id });

    if (result == null) return null;

    return CarteiraMapper.toDomain(result);
  }

  async deleteByCod(id: string): Promise<boolean> {
    console.log("CarteiraRepository: deleteByName: " + JSON.stringify(id));

    const result: any = await CarteiraSchema.deleteOne({ codCarteira: id });

    return result.acknowledged;
  }
}
