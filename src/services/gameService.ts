import gamesRepository from "../repositories/gamesRepository";
import { gameService } from "../types/authTypes";

async function insertGame(game: gameService, user_id: number) {
  const { name, releaseDate } = game;
  const duplicated = await gamesRepository.duplicatedGame(releaseDate, name);
  if (duplicated) {
    throw {
      type: "conflict",
      message: "game already exist in our database",
    };
  }
  await gamesRepository.insert(game, user_id);
}

async function getGame(id: number) {
  return await gamesRepository.getGames(id);
}

const gameService = { insertGame, getGame };
export default gameService;
