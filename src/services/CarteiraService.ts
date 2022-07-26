import { Service } from "typedi";
import Carteira from "../domain/Carteira";
import Zona from "../domain/Zona";
import ICarteiraDTO from "../dto/ICarteiraDTO";
import CarteiraMapper from "../mappers/CarteiraMapper";
import CarteiraRepository from "../repository/CarteiraRepository";
import ZonaRepository from "../repository/ZonaRepository";
import { ICarteiraService } from "./Service_Interfaces";

@Service()
export default class CarteiraService implements ICarteiraService {
  private repository: CarteiraRepository;
  private zonaRepository: ZonaRepository;

  constructor() {
    this.repository = new CarteiraRepository();
    this.zonaRepository = new ZonaRepository();
  }
  async getAllRecomendacoes() {
    console.log("CarteiraService: getAllRecomendacoes");

    let result: Carteira[] = await this.repository.findAll();

    let array_result = result.map((x) => CarteiraMapper.toDTO(x));

    return array_result;
  }
  async createCarteira(umaCarteiraDto: ICarteiraDTO) {
    console.log(
      "CarteiraService: createCarteira: " +
        JSON.stringify(umaCarteiraDto)
    );

    const aZona: Zona = await this.zonaRepository.findByName(
      umaCarteiraDto.zona
    );
    if (!aZona) return "Código de zona invalido.";

    let umaCarteira: Carteira =
      CarteiraMapper.toDomain(umaCarteiraDto);
    let result: Carteira = await this.repository.save(umaCarteira);
    return CarteiraMapper.toDTO(result);
  }
  async updateCarteira(umaCarteiraDto: ICarteiraDTO) {
    console.log(
      "CarteiraService: updateCarteira: " +
        JSON.stringify(umaCarteiraDto)
    );

    let umaCarteira: Carteira =
      CarteiraMapper.toDomain(umaCarteiraDto);

    let result: Carteira | string = await this.repository.update(
      umaCarteira
    );
    console.log(typeof result);

    if (typeof result == "string") return result;
    return CarteiraMapper.toDTO(result);
  }
  async deleteCarteira(id: string) {
    console.log("CarteiraService: deleteCarteira: " + id);

    let result: boolean = await this.repository.deleteByCodigo(id);

    return result;
  }
}
