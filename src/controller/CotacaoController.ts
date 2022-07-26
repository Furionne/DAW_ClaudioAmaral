import CotacaoService from "../services/CotacaoService";
import { Request, Response } from "express";
import ICotacaoDTO from "../dto/ICotacaoDTO";

export default class CotacaoController {
  private service: CotacaoService;

  constructor() {
    this.service = new CotacaoService();
  }

  post = async (req: Request, res: Response) => {
    let cotacaoDto: ICotacaoDTO = req.body;

    try {
      let result = await this.service.createCotacao(cotacaoDto);
      res.status(201).send(result);
    } catch (err) {
      res.status(500).send("Erro ao criar cotacao.");
    }
  };


  get = async (req: Request, res: Response) => {
    try {
      let result = await this.service.getAllCotacoes();
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("deu erro");
    }
  };

  getByName = async (req: Request, res: Response) => {
    try {
      let result = await this.service.getCotacaoByName(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("Cotacao não encontrada na base de dados.");
    }
  };

  put = async (req: Request, res: Response) => {
    let cotacaoDto: ICotacaoDTO = req.body;

    try {
      let result = await this.service.updateCotacao(cotacaoDto);
      if (result == null) return res.status(200).send("cotacao not found");
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send("Erro a aceder base de dados.");
    }
  };




}
