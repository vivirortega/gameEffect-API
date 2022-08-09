import { Router } from "express";
import { createGame, deleteGame, getGame } from "../controllers/gamesController";
import schemaValidator from "../middlewares/schemaValidator";
import { gameSchema } from "../schemas/gameSchema";
import { tokenValidator } from "../middlewares/tokenValidate";

const gameRouter = Router();

gameRouter.post("/game", schemaValidator(gameSchema), tokenValidator, createGame);
gameRouter.delete("/game/:id", tokenValidator, deleteGame);
gameRouter.get("/game/:id", tokenValidator, getGame);

export default gameRouter;
