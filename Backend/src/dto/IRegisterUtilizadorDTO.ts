import { ILoginUtilizadorDTO } from "./ILoginUtilizadorDTO";

export interface IRegisterUtilizadorDTO extends ILoginUtilizadorDTO {
  name: string;
  confirmPassword: string;
}
