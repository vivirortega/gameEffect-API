import { Router } from "express";
import { createGame, deleteGame } from "../controllers/gamesController";
import schemaValidator from "../middlewares/schemaValidator";
import { gameSchema } from "../schemas/gameSchema";
import { tokenValidator } from "../middlewares/tokenValidate";

const gameRouter = Router();

gameRouter.post("/game", schemaValidator(gameSchema), tokenValidator, createGame);
gameRouter.post("/game/:id", tokenValidator, deleteGame);

export default gameRouter;
