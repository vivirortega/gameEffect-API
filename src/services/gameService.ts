import gamesRepository from "../repositories/gamesRepository";
import { gameService } from "../types/authTypes";

async function insertGame(game: gameService, user_id: number) {
   await gamesRepository.insert(game, user_id);
}

async function getGame(id: number) {
   return await gamesRepository.getGames(id);
}

const gameService = { insertGame, getGame };
export default gameService;
