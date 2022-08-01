import { Utilizador } from "../domain/Utilizador";
import { IRegisterUtilizadorDTO } from "../dto/IRegisterUtilizadorDTO";
import { IUtilizadorDTO } from "../dto/IUtilizadorDTO";
import { IUtilizadorPayload } from "../dto/IUtilizadorPayload";
import { IUtilizadorPersistance } from "../dataschema/IUtilizadorPersistence";

export class UtilizadorMapper {
  public static registerUtilizadorToDomain = (
    utilizador: IRegisterUtilizadorDTO
  ): Utilizador => {
    return Utilizador.create(
      utilizador.name,
      utilizador.email,
      utilizador.password
    );
  };

  public static toUtilizadorPayload = ({
    email,
    name,
  }: Utilizador): IUtilizadorPayload => {
    return {
      email,
      name,
    };
  };

  public static toUtilizadorDTO = ({
    name,
    email,
  }: Utilizador): IUtilizadorDTO => {
    return {
      name,
      email,
    };
  };

  public static persistanceToDomain = (
    utilizador: IUtilizadorPersistance
  ): Utilizador => {
    return Utilizador.create(
      utilizador.name,
      utilizador.email,
      utilizador.password
    );
  };

  public static toPersistance = ({
    name,
    email,
    password,
  }: Utilizador): IUtilizadorPersistance => {
    return {
      name,
      email,
      password,
    };
  };
}
