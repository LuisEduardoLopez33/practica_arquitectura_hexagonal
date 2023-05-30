import "dotenv/config";

import { DataSource } from "typeorm";

import Tareas from "../../domain/Tareas";

export default new DataSource({
  type: "postgres",
  host: "44.211.213.110",
  port: +5432,
  username: "luis",
  password: "luis12345678",
  database: "tareas_bd",
  entities: [Tareas],
  synchronize: true,
  logging: false,
});
