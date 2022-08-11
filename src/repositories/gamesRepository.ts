import { games } from "@prisma/client";
import { string } from "joi";
import prisma from "../config/database";
import { gameService } from "../types/authTypes";

export async function insert(game: gameService, user_id: number) {
  await prisma.games.create({ data: { ...game, user_id } });
}

export async function getGames(id: number) {
  return await prisma.games.findFirst({
    where: {
      id: id,
    },
  });
}

export async function deleteGame(id: number) {
  return await prisma.games.delete({
    where: {
      id: id,
    },
  });
}

export async function duplicatedGame(releaseDate: string, name: string){
  return await prisma.games.findFirst({
    where: {
      releaseDate: releaseDate, name: name
    }
  });
}


const gamesRepository = { insert, deleteGame, getGames, duplicatedGame };
export default gamesRepository;
