import gamelistRepository from "../repositories/gamelistRepository";

async function insertGamelist(
  game_id: number,
  user_id: number,
  gamelist: boolean
) {
  await gamelistRepository.insertGamelist(game_id, user_id, gamelist);
}

const gamelistService = { insertGamelist };
export default gamelistService;
