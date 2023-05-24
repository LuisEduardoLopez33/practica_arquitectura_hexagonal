import { TareaData } from "../domain/InterfaceRepository";
import { TareasRepository } from "../infraestructure/TareasRepository";
export class CreateTareaUseCase {
  constructor(readonly tareasRepository: TareasRepository) {}

  async createTarea(tareaD: TareaData) {
    console.log(tareaD.descripcion);
    const tarea = await this.tareasRepository.create(tareaD);
    console.log("si llego");

    if (!tarea) throw new Error("NO SE PUDO CREAR LA TAREA");

    return tarea;
  }
}
