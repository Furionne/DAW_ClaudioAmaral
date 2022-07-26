import Cotacao from "../domain/Cotacao";
import CotacaoSchema from "../schemas/CotacaoSchema";
import CotacaoMapper from "../mappers/CotacaoMapper";
import ICotacaoPersistence from "../dataschema/ICotacaoPersistence";

export default class CotacaoRepository {
  constructor() {}

  async save(umaCotacao: Cotacao): Promise<Cotacao> {
    console.log(
      "CotacaoRepository: save: " + JSON.stringify(umaCotacao)
    );

    let umaCotacaoDoc: ICotacaoPersistence =
      CotacaoMapper.toPersistence(umaCotacao);

    let result: ICotacaoPersistence = await CotacaoSchema.create(
      umaCotacaoDoc
    );

    return CotacaoMapper.toDomain(result);
  }

  async update(umaCotacao: Cotacao): Promise<any> {
    console.log(
      "CotacaoRepository: save: " + JSON.stringify(umaCotacao)
    );

    let umaCotacaoDoc: ICotacaoPersistence =
      CotacaoMapper.toPersistence(umaCotacao);

    let result: ICotacaoPersistence | null =
      await CotacaoSchema.findOneAndUpdate(
        { codigo: umaCotacao.codigo },
        umaCotacaoDoc
      );

    if (result == null) return "Recomendação inexistente.";
    return CotacaoMapper.toDomain(result);
  }

  async findAll(): Promise<any> {
    console.log("CotacaoRepository: findAll ");

    const result: ICotacaoPersistence[] = await CotacaoSchema.find(
      {}
    );

    let final_result = result.map((x) => CotacaoMapper.toDomain(x));

    return final_result;
  }

  async findValidasByZona(id: string): Promise<any> {
    console.log(
      "CotacaoRepository: findValidasByZona: " + JSON.stringify(id)
    );

    const result: ICotacaoPersistence[] =
      await CotacaoSchema.aggregate([
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
    let final_result = result.map((x) => CotacaoMapper.toDomain(x));
    return final_result;
  }

  async deleteByCodigo(id: string): Promise<boolean> {
    console.log("CotacaoRepository: deleteById: " + JSON.stringify(id));

    const result: any = await CotacaoSchema.deleteOne({ codigo: id });

    return result.acknowledged;
  }
}
