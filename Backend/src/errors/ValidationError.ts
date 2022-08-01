export class ValidationErrors extends Error {
  constructor(public messages: string[], public statusCode: number = 400) {
    super();
  }
}
