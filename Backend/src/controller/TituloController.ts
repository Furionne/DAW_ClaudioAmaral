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

  
    get = async (req: Request, res: Response) => {
      try {
        let result = await this.service.getAllTitulos();
        res.status(200).send(result);
      } catch (err) {
        res.status(500).send("deu erro");
      }
    };

    getByCod = async (req: Request, res: Response) => {
        try {
          let result = await this.service.getTituloByCod(req.params.id);
          res.status(200).send(result);
        } catch (err) {
          res.status(500).send("Carteira não encontrada na base de dados.");
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
}
