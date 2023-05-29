import { Application } from "express";
import express from "express";
import http from "http";

import { paths } from "./tareas/domain/InterfaceRepository";
// import db from "./tareas/infraestructure/database/db";
import { tareaRouter } from "./tareas/infraestructure/TareasRouter";

export default class Server {
  private readonly app: Application;
  private port: string | number;
  private paths: paths;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.app.use(express.json());
    this.app.get("/", (req, res) => {
      res.send("Hola api en typescript, nodo B");
      console.log("Se recibió una petición GET");
    });
    this.paths = {
      tareas: "/tareas",
    };
    // this.dataBaseConnection();
    // // this.middlewares();
    // this.routes();
  }
  // async dataBaseConnection(): Promise<void> {
  //   db.initialize()
  //     .then(() => {
  //       console.log("DataBase connected");
  //     })
  //     .catch(console.error);
  // }
  routes() {
    this.app.use(this.paths.tareas, tareaRouter);
  }
  initialize() {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);
      server
        .listen(this.port || 3000)
        .on("listening", () => {
          resolve(true);
          console.log("Server started in port: " + this.port);
        })
        .on("error", (error: Error) => {
          reject(true);
          console.log("Server failed to start: ", error);
        });
    });
  }
}
