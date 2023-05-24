import Tareas from "./Tareas";

export interface InterfaceRepository<T> {
  // create
  // getAll
  create(tarea: TareaData): Promise<number>;

  getAll(): Promise<Tareas[]>;
}

export interface TareaData {
  nombre: string;
  descripcion: string;
  fecha: Date;
}

export interface paths {
  tareas: string;
}
