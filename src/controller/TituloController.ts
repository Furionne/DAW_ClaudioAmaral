import TituloService from "../services/TituloService";
import { Request, Response } from "express";
import ITituloDTO from "../dto/ITituloDTO";

export default class TituloController {
  private service: TituloService;

  constructor() {
    this.service = new TituloService();
  }

  post = async (req: Request, res: Response) => {
    let tituloDto: ITituloDTO = req.body;

    try {
      let result = await this.service.createTitulo(tituloDto);
      res.status(201).send(result);
    } catch (err) {
      res.status(500).send("Erro ao criar titulo.");
    }
  };

  put = async (req: Request, res: Response) => {
    let tituloDto: ITituloDTO = req.body;

    try {
      let result = await this.service.updateTitulo(tituloDto);
      if (result == null) return res.status(200).send("titulo not found");
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("Erro a aceder base de dados.");
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      let result: boolean = await this.service.deleteTitulo(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("Erro ao apagar titulo.");
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      let result = await this.service.getAllRecomendacoes();
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("deu erro");
    }
  };


}
