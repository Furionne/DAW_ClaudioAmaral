import { Utilizador } from "../domain/Utilizador";
import { UtilizadorMapper } from "../mappers/UtilizadorMapper";
import { UtilizadorModel } from "../schemas/UtilizadorModel";
import { IutilizadorRepository } from "./IUtilizadorRepository";

export class UtilizadorRepository implements IutilizadorRepository {
  private model = UtilizadorModel;

  public getAllUtilizadors = async () => {
    const utilizadors = await this.model.find();
    return utilizadors.map((utilizador) =>
      UtilizadorMapper.persistanceToDomain(utilizador)
    );
  };

  public addUtilizador = async (utilizador: Utilizador) => {
    const utilizadorPersistance = UtilizadorMapper.toPersistance(utilizador);
    return UtilizadorMapper.persistanceToDomain(
      await this.model.create(utilizadorPersistance)
    );
  };

  public getUtilizadorByEmail = async (email: string) => {
    const utilizador = await this.model.findOne({ email });
    if (!utilizador) return null;
    return UtilizadorMapper.persistanceToDomain(utilizador);
  };
}
