import Tareas from "./Tareas";

export interface InterfaceRepository<T> {
  create(tarea: TareaData): Promise<number>;
  getAll(): Promise<Tareas[]>;
  getById(id: number): Promise<Tareas>;
}

export interface TareaData {
  nombre: string;
  descripcion: string;
  fecha: Date;
}

export interface paths {
  tareas: string;
}
