import Cotacao from "../domain/Cotacao";
import CotacaoSchema from "../schemas/CotacaoSchema";
import CotacaoMapper from "../mappers/CotacaoMapper";
import ICotacaoPersistence from "../dataschema/ICotacaoPersistence";

export default class CotacaoRepository {
  constructor() {}

  async save(umaCotacao: Cotacao): Promise<Cotacao> {
    console.log("CotacaoRepository: save: " + JSON.stringify(umaCotacao));

    let umaCotacaoDoc: ICotacaoPersistence =
      CotacaoMapper.toPersistence(umaCotacao);

    let result: ICotacaoPersistence = await CotacaoSchema.create(umaCotacaoDoc);

    return CotacaoMapper.toDomain(result);
  }

  async update(umaCotacao: Cotacao): Promise<any> {
    console.log("CotacaoRepository: save: " + JSON.stringify(umaCotacao));

    let umaCotacaoDoc: ICotacaoPersistence =
      CotacaoMapper.toPersistence(umaCotacao);

    let result: ICotacaoPersistence | null =
      await CotacaoSchema.findOneAndUpdate(
        { codCotacao: umaCotacao.codCotacao },
        umaCotacaoDoc
      );

    if (result == null) return "Cotacao inexistente.";
    return CotacaoMapper.toDomain(result);
  }

  async findAll(): Promise<any> {
    console.log("CotacaoRepository: findAll ");

    const result: ICotacaoPersistence[] = await CotacaoSchema.find({});

    let final_result = result.map((x) => CotacaoMapper.toDomain(x));

    return final_result;
  }

  async findByCod(id: string): Promise<any | null> {
    console.log("CotacaoRepository: findByName: " + JSON.stringify(id));

    const result = await CotacaoSchema.findOne({ codCotacao: id });

    if (result == null) return null;

    return CotacaoMapper.toDomain(result);
  }
}
