import { ValidationErrors } from "../errors/ValidationError";

export class Utilizador {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  public static create(
    name: string,
    email: string,
    password: string
  ): Utilizador {
    this.validate(name, email, password);
    return new Utilizador(name, email, password);
  }

  private static validate(name: string, email: string, password: string) {
    const errors: string[] = [];

    if (!name) {
      errors.push("name is required");
    }
    if (!email) {
      errors.push("email is required");
    }
    if (!password) {
      errors.push("password is required");
    }

    if (errors.length > 0) {
      throw new ValidationErrors(errors);
    }
  }
}
