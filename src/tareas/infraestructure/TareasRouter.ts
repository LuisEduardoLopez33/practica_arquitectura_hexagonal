import { Router } from "express";

import { tareasController } from "./dependencies";

export const tareaRouter = Router();

tareaRouter.post(
  "/nuevo/",
  tareasController.createTarea.bind(tareasController)
);
tareaRouter.get("/get", tareasController.getAll.bind(tareasController));

tareaRouter.get(
  "/getById/:id",
  tareasController.getById.bind(tareasController)
);
