import { Request, Response } from "express";

import { CreateTareaUseCase } from "../application/CreateTareaUseCase";
import { GetElementUseCase } from "../application/GetElementUseCase";
import { ListTareasUseCase } from "../application/ListTareasUseCase";
import { TareaData } from "../domain/InterfaceRepository";

export class TareasController {
  constructor(
    readonly repository: CreateTareaUseCase,
    readonly listTareas: ListTareasUseCase,
    readonly getElement: GetElementUseCase
  ) {}

  async createTarea(req: Request, res: Response) {
    const tarea: TareaData = req.body;

    console.log(JSON.stringify(req.body));
    const repuesta = await this.repository.createTarea(tarea);
    if (repuesta == 2) {
      res.status(200).send("se guardo");
    } else {
      res.status(200).send("no se guardo");
    }
  }

  async getAll(req: Request, res: Response) {
    const respuesta = await this.listTareas.getListaTareas();

    res.status(200).send(respuesta);
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    const respuesta = await this.getElement.run(Number(id));
    res.status(200).send(respuesta);
  }
}
