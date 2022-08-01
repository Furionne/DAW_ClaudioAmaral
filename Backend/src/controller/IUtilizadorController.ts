import { Request, Response } from "express";

export interface IUtilizadorController {
  register: (req: Request, res: Response) => Promise<void>;
  login: (req: Request, res: Response) => Promise<void>;
  getAll: (req: Request, res: Response) => Promise<void>;
}
