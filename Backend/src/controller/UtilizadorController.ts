import { Request, Response } from "express";
import { UtilizadorService } from "../services/UtilizadorService";
import { IUtilizadorController } from "./IUtilizadorController";

export class UtilizadorController implements IUtilizadorController {
  constructor(private service = new UtilizadorService()) {}

  public register = async (req: Request, res: Response) => {
    const utilizadorRxp = await this.service.registerNewUtilizador(req.body);
    res.status(201).json(utilizadorRxp);
  };

  public login = async (req: Request, res: Response) => {
    const utilizadorRxp = await this.service.loginExistingUtilizador(req.body);
    res.json(utilizadorRxp);
  };

  public getAll = async (req: Request, res: Response) => {
    res.json(await this.service.getAllUtilizadors());
  };
}
