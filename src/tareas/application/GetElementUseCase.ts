import { TareasRepository } from "../infraestructure/TareasRepository";

export class GetElementUseCase {
  constructor(readonly tareasRopesitory: TareasRepository) {}
  async run(id: number) {
    const tarea = await this.tareasRopesitory.getById(id);
    if (!tarea) throw new Error("NO SE PUDO RECUPERAR TAREA");
    return tarea;
  }
}
