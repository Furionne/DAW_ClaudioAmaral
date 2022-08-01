import express from "express";
import mongoose from "mongoose";
import Routes from "./src/routes/Routes";
import cors from "cors";

export class App {
  public app: express.Application = express();
  public routes: Routes = new Routes();
  public mongoUrl: string =
    "mongodb+srv://claudio:jesuisclaude@cluster0.wvfs7g9.mongodb.net/test235";

  constructor() {
    this.config();
    this.mongoSetup();
    this.routes.middleware.routes(this.app);
    this.routes.carteira.routes(this.app);
    this.routes.cotacao.routes(this.app);
    this.routes.titulo.routes(this.app);
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);

    mongoose.connection.on("error", () => {
      console.error("connection error");
    });
    mongoose.connection.once("open", () => {
      console.log("Backend connected to MongoDB...");
      console.log("=========================================");
    });
  }
}

export default new App().app;
