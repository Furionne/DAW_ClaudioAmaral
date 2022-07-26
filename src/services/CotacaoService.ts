import Cotacao from "../domain/Cotacao";
import ICotacaoDTO from "../dto/ICotacaoDTO";
import CotacaoMapper from "../mappers/CotacaoMapper";
import CotacaoRepository from "../repository/CotacaoRepository";


export default class CotacaoService {
  private repository: CotacaoRepository;

  constructor() {
    this.repository = new CotacaoRepository();
  }

  
  async getAllCotacoes() {
    console.log("CotacaoService: getAllCotacoes");

    let result: Cotacao[] = await this.repository.findAll();

    let array_result = result.map((x) => CotacaoMapper.toDTO(x));

    return array_result;
  }

  async getCotacaoByName(id: string) {
    console.log("CotacaoService: getCotacaoByName: " + id);

    let result: Cotacao = await this.repository.findByName(id);

    return CotacaoMapper.toDTO(result);
  }



  async createCotacao(umaCotacaoDto: ICotacaoDTO) {
    console.log(
      "CotacaoService: createCotacao: " +
        JSON.stringify(umaCotacaoDto)
    );
    let umaCotacao: Cotacao =
      CotacaoMapper.toDomain(umaCotacaoDto);
    let result: Cotacao = await this.repository.save(umaCotacao);
    return CotacaoMapper.toDTO(result);
  }



  async updateCotacao(umaCotacaoDto: ICotacaoDTO) {
    console.log(
      "CotacaoService: updateCotacao: " +
        JSON.stringify(umaCotacaoDto)
    );

    let umaCotacao: Cotacao =
      CotacaoMapper.toDomain(umaCotacaoDto);

    let result: Cotacao | string = await this.repository.update(
      umaCotacao
    );
    console.log(typeof result);

    if (typeof result == "string") return result;
    return CotacaoMapper.toDTO(result);
  }



  async deleteCotacao(id: string) {
    console.log("CotacaoService: deleteCotacao: " + id);

    let result: boolean = await this.repository.deleteByName(id);

    return result;
  }
}
