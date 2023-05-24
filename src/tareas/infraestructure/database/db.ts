import "dotenv/config";

import { DataSource } from "typeorm";

import Tareas from "../../domain/Tareas";

export default new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: +(process.env.DB_PORT || 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Tareas],
  synchronize: true,
  logging: false,
});
