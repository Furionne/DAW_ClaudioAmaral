import { ILoginUtilizadorDTO } from "../dto/ILoginUtilizadorDTO";
import { IRegisterUtilizadorDTO } from "../dto/IRegisterUtilizadorDTO";
import { IUtilizadorAuthResponse } from "../dto/IUtilizadorAuthResponse";
import { IUtilizadorDTO } from "../dto/IUtilizadorDTO";

export interface IUtilizadorService {
  registerNewUtilizador: (
    utilizador: IRegisterUtilizadorDTO
  ) => Promise<IUtilizadorAuthResponse>;
  loginExistingUtilizador: (
    utilizador: ILoginUtilizadorDTO
  ) => Promise<IUtilizadorAuthResponse>;
  getAllUtilizadors: () => Promise<IUtilizadorDTO[]>;
}
