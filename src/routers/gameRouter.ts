import { Router } from "express";
import {
  createGame,
  deleteGame,
  getGame,
  searchGame,
  searchRecentGames,
  searchJrpg,
} from "../controllers/gamesController";
import {
  createAvaliation,
  deleteAvaliation,
  getAllAvaliations,
  getAllRate,
} from "../controllers/avaliationController";
import schemaValidator from "../middlewares/schemaValidator";
import { avaliationSchema } from "../schemas/avaliationSchema";
import { gameSchema } from "../schemas/gameSchema";
import { tokenValidator } from "../middlewares/tokenValidate";

const gameRouter = Router();

gameRouter.post(
  "/game",
  schemaValidator(gameSchema),
  tokenValidator,
  createGame
);
gameRouter.delete("/game/:id", tokenValidator, deleteGame);
gameRouter.get("/game/:id", tokenValidator, getGame);
gameRouter.get("/game", tokenValidator, searchGame);
gameRouter.get("/", tokenValidator, searchRecentGames);
gameRouter.post(
  "/game/:id/avaliation",
  schemaValidator(avaliationSchema),
  tokenValidator,
  createAvaliation
);
gameRouter.delete(
  "/game/:id/avaliations/:id",
  tokenValidator,
  deleteAvaliation
);
gameRouter.get("/game/:id/avaliations", tokenValidator, getAllAvaliations);
gameRouter.get("/game/:id/rate", tokenValidator, getAllRate);
gameRouter.get("/jrpg", tokenValidator, searchJrpg);

export default gameRouter;
