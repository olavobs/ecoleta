import express from "express";

import PointsController from "./controllers/PointController";
import ItemsController from "./controllers/ItemController";

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;
