import { NextFunction, Request, Response, Router } from "express";

export default class Middleware {
  routes(app: Router) {
    app.use((req: Request, res: Response, next: NextFunction) => {
      console.log("Middleware: " + req.method + ":" + req.url);
      try {
        next();
      } catch (err) {
        res.json(err);
      }
    });
  }
}
