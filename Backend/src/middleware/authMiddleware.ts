import { Request, Response, NextFunction } from "express";
import { ValidationErrors } from "../errors/ValidationError";
import JWT_Token from "../utils/JWT_Token";

export class AuthMiddleware {
  public static async authenticate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const token = req.headers.authorization;
    if (!token) {
      return next(new ValidationErrors(["Token not found"], 401));
    }
    try {
      const decodedToken = JWT_Token.verifyToken(token);

      if (!decodedToken) {
        next(new ValidationErrors(["Invalid Token "], 401));
      }
      res.locals.user = decodedToken;

      next();
    } catch (error) {
      next(new ValidationErrors(["Invalid Token"], 401));
    }
  }
}
