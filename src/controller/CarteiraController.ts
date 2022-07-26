import CarteiraService from "../services/CarteiraService";
import { Request, Response } from "express";
import ICarteiraDTO from "../dto/ICarteiraDTO";

export default class CarteiraController {
  private service: CarteiraService;

  constructor() {
    this.service = new CarteiraService();
  }

  post = async (req: Request, res: Response) => {
    let carteiraDto: ICarteiraDTO = req.body;

    try {
      let result = await this.service.createCarteira(carteiraDto);
      res.status(201).send(result);
    } catch (err) {
      res.status(500).send("Erro ao criar carteira.");
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      let result = await this.service.getAllCarteiras();
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("deu erro");
    }
  };

  getByName = async (req: Request, res: Response) => {
    try {
      let result = await this.service.getCarteiraByName(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("Virus não encontrado na base de dados.");
    }
  };



  put = async (req: Request, res: Response) => {
    let carteiraDto: ICarteiraDTO = req.body;

    try {
      let result = await this.service.updateCarteira(carteiraDto);
      if (result == null) return res.status(200).send("carteira not found");
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("Erro a aceder base de dados.");
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      let result: boolean = await this.service.deleteCarteira(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("Erro ao apagar carteira.");
    }
  };

  


}
