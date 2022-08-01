import { ILoginUtilizadorDTO } from "../dto/ILoginUtilizadorDTO";
import { IRegisterUtilizadorDTO } from "../dto/IRegisterUtilizadorDTO";
import { UtilizadorMapper } from "../mappers/UtilizadorMapper";
import { UtilizadorRepository } from "../repository/UtilizadorRepository";
import JWT_Token from "../utils/JWT_Token";
import { Password } from "../utils/Password";

export class UtilizadorService {
  constructor(
    private repository: UtilizadorRepository = new UtilizadorRepository()
  ) {}

  public registerNewUtilizador = async (utilizador: IRegisterUtilizadorDTO) => {
    const utilizadorDomain = UtilizadorMapper.registerUtilizadorToDomain({
      ...utilizador,
      password: Password.hash(utilizador.password),
    });
    const utilizadorExists = await this.repository.getUtilizadorByEmail(
      utilizadorDomain.email
    );
    if (utilizadorExists) {
      throw new Error("A utilizador with this email already exists");
    }

    const savedUtilizador = await this.repository.addUtilizador(
      utilizadorDomain
    );
    const payload = UtilizadorMapper.toUtilizadorPayload(savedUtilizador);
    const token = JWT_Token.generateToken(payload);
    return { ...payload, token };
  };

  public loginExistingUtilizador = async (utilizador: ILoginUtilizadorDTO) => {
    const utilizadorDomain = await this.repository.getUtilizadorByEmail(
      utilizador.email
    );
    if (!utilizadorDomain) {
      throw new Error("Invalid email or password");
    }
    if (!Password.compare(utilizador.password, utilizadorDomain.password)) {
      throw new Error("Invalid email or password");
    }
    const payload = UtilizadorMapper.toUtilizadorPayload(utilizadorDomain);
    const token = JWT_Token.generateToken(payload);
    return { ...payload, token };
  };

  public getAllUtilizadors = async () => {
    const utilizadors = await this.repository.getAllUtilizadors();
    return utilizadors.map((utilizador) =>
      UtilizadorMapper.toUtilizadorDTO(utilizador)
    );
  };
}
