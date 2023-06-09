import { InterfaceRepository } from "../domain/InterfaceRepository";
import { TareaData } from "../domain/InterfaceRepository";
import Tareas from "../domain/Tareas";
import database from "./database/db";

export class TareasRepository implements InterfaceRepository<Tareas> {
  async create(tarea: TareaData): Promise<number> {
    try {
      const tareasR = database.getRepository(Tareas);
      const newTarea = tareasR.create({
        nombre: tarea.nombre,
        descripcion: tarea.descripcion,
        fecha: tarea.fecha,
      });
      // const newTarea = tareasR.create(tarea)
      await tareasR.save(newTarea);
      return 2;
    } catch (error) {
      return 1;
    }
  }

  async getAll(): Promise<Tareas[]> {
    const tareasR = database.getRepository(Tareas);
    const tareas = tareasR.find();
    return tareas;
  }
  async getById(id: number): Promise<Tareas> {
    const tareasR = database.getRepository(Tareas);
    const tarea = await tareasR.findOneBy({ id });
    if (tarea === null) {
      // Manejar el caso en que no se encuentra la entidad
      throw new Error("La tarea no existe");
    }
    return tarea;
  }
}
