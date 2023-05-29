import { CreateTareaUseCase } from "../application/CreateTareaUseCase";
import { GetElementUseCase } from "../application/GetElementUseCase";
import { ListTareasUseCase } from "../application/ListTareasUseCase";
import { TareasController } from "./TareasController";
import { TareasRepository } from "./TareasRepository";
const tareasRepository = new TareasRepository();
const tareasRepository2 = new TareasRepository();
const tareasRepository3 = new TareasRepository();

export const createTareaUseCase = new CreateTareaUseCase(tareasRepository);
export const listTareaUseCase = new ListTareasUseCase(tareasRepository2);
export const getTareaByIdUseCase = new GetElementUseCase(tareasRepository3);
export const tareasController = new TareasController(
  createTareaUseCase,
  listTareaUseCase,
  getTareaByIdUseCase
);
