import { games } from "@prisma/client";
import prisma from "../config/database";
import { gameService } from "../types/authTypes";

export async function insert(game: gameService, user_id: number) {
  await prisma.games.create({ data: { ...game, user_id } });
}

export async function deleteGame(id: number) {
  await prisma.games.delete({
    where: {
      id: id,
    },
  });
}

const gamesRepository = { insert, deleteGame };
export default gamesRepository;
