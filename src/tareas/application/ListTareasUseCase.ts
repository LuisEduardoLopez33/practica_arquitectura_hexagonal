import { TareasRepository } from "../infraestructure/TareasRepository";

export class ListTareasUseCase {
  constructor(readonly tareasRopesitory: TareasRepository) {}
  async getListaTareas() {
    const listaTareas = await this.tareasRopesitory.getAll();
    if (!listaTareas)
      throw new Error("NO SE PUDO RECUPERAR LA LISTA DE TAREAS");
    return listaTareas;
  }
}
