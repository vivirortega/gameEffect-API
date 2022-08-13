import prisma from "../config/database";

export async function insertGamelist(
  user_id: number,
  game_id: number,
  gamelist: boolean
) {
  await prisma.gamelist.create({ data: { user_id, game_id, gamelist } });
}

const gamelistRepository = { insertGamelist };
export default gamelistRepository;
