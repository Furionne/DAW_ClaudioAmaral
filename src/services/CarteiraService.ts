import Carteira from "../domain/Carteira";
import ICarteiraDTO from "../dto/ICarteiraDTO";
import CarteiraMapper from "../mappers/CarteiraMapper";
import CarteiraRepository from "../repository/CarteiraRepository";



export  default class  CarteiraService {
  private repository: CarteiraRepository;

  constructor() {
    this.repository = new CarteiraRepository();
  }

  
  async getAllCarteiras() {
    console.log("CarteiraService: getAllCarteiras");

    let result: Carteira[] = await this.repository.findAll();

    let array_result = result.map((x) => CarteiraMapper.toDTO(x));

    return array_result;
  }

  async getCarteiraByName(id: string) {
    console.log("CarteiraService: getCarteiraByName: " + id);

    let result: Carteira = await this.repository.findByCod(id);

    return CarteiraMapper.toDTO(result);
  }



  async createCarteira(umaCarteiraDto: ICarteiraDTO) {
    console.log(
      "CarteiraService: createCarteira: " +
        JSON.stringify(umaCarteiraDto)
    );
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

    let result: boolean = await this.repository.deleteByCod(id);

    return result;
  }
}
