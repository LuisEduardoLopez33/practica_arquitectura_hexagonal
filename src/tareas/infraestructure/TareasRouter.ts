import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";

import { tareasController } from "./dependencies";

export const tareaRouter = Router();

tareaRouter.post(
  "/nuevo/",
  tareasController.createTarea.bind(tareasController)
);
tareaRouter.get("/get", tareasController.getAll.bind(tareasController));
tareaRouter.post("/otro/", (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  tareasController.createTarea.bind(tareasController)(req, res);
});
