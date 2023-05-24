import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("tareas")
export default class Tareas {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("text")
  nombre: string | undefined;

  @Column("text")
  descripcion: string | undefined;

  @CreateDateColumn()
  fecha: Date | undefined;
}
