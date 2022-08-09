import gamesRepository from "../repositories/gamesRepository";
import { gameService } from "../types/authTypes";

async function insertGame(game: gameService, user_id: number) {
   await gamesRepository.insert(game, user_id);
}

const gameService = { insertGame };
export default gameService;
