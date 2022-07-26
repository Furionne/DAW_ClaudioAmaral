
import Titulo from "../domain/Titulo";
import ITituloDTO from "../dto/ITituloDTO";
import TituloMapper from "../mappers/TituloMapper";
import TituloRepository from "../repository/TituloRepository";


export default class TituloService {
  private repository: TituloRepository;

  constructor() {
    this.repository = new TituloRepository();
  }

  
  async getAllTitulos() {
    console.log("TituloService: getAllTitulos");

    let result: Titulo[] = await this.repository.findAll();

    let array_result = result.map((x) => TituloMapper.toDTO(x));

    return array_result;
  }

  async getTituloByName(id: string) {
    console.log("TituloService: getTituloByName: " + id);

    let result: Titulo = await this.repository.findByName(id);

    return TituloMapper.toDTO(result);
  }



  async createTitulo(umaTituloDto: ITituloDTO) {
    console.log(
      "TituloService: createTitulo: " +
        JSON.stringify(umaTituloDto)
    );
    let umaTitulo: Titulo =
      TituloMapper.toDomain(umaTituloDto);
    let result: Titulo = await this.repository.save(umaTitulo);
    return TituloMapper.toDTO(result);
  }



  async updateTitulo(umaTituloDto: ITituloDTO) {
    console.log(
      "TituloService: updateTitulo: " +
        JSON.stringify(umaTituloDto)
    );

    let umaTitulo: Titulo =
      TituloMapper.toDomain(umaTituloDto);

    let result: Titulo | string = await this.repository.update(
      umaTitulo
    );
    console.log(typeof result);

    if (typeof result == "string") return result;
    return TituloMapper.toDTO(result);
  }



  async deleteTitulo(id: string) {
    console.log("TituloService: deleteTitulo: " + id);

    let result: boolean = await this.repository.deleteByName(id);

    return result;
  }
}
