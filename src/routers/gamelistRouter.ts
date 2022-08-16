import { Router } from "express";
import { createGamelist } from "../controllers/gamelistController";
import { tokenValidator } from "../middlewares/tokenValidate";
import { gamelistSchema } from "../schemas/gamelistSchema";
import schemaValidator from "../middlewares/schemaValidator";

const gamelistRouter = Router();

gamelistRouter.post(
  "/game/:id/gamelist",
  schemaValidator(gamelistSchema),
  tokenValidator,
  createGamelist
);

export default gamelistRouter;
