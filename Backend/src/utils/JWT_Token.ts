import { sign, verify } from "jsonwebtoken";
import { IUtilizadorPayload } from "../dto/IUtilizadorPayload";

export default class JWT_Token {
  private static readonly secret = process.env.JWT_SECRET! || "superSecret";
  private static readonly tokenValidity = process.env.TOKEN_VALIDITY || "48h";

  public static generateToken = (utilizador: IUtilizadorPayload): string => {
    return sign({ ...utilizador }, this.secret, {
      expiresIn: this.tokenValidity,
    });
  };

  public static verifyToken = (token: string) => {
    return verify(token, this.secret);
  };
}
