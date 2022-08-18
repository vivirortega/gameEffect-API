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

export async function searchGame(name: string) {
  return await prisma.games.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
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

export async function duplicatedGame(releaseDate: string, name: string) {
  return await prisma.games.findFirst({
    where: {
      releaseDate: releaseDate,
      name: name,
    },
  });
}

export async function searchRecentGames() {
  return await prisma.$queryRaw`SELECT * FROM games ORDER BY created_at DESC`;
}

export async function favorites(user_id: number) {
  const userId = user_id;
  return await prisma.$queryRaw`SELECT games."pictureUrl" as picture, games."name", "isFavorite"
  from avaliations
  JOIN games ON game_id = games.id
  WHERE "isFavorite" = true AND avaliations.user_id = ${userId}
  ORDER BY avaliations.created_at DESC;
`;
}

export async function searchGenreJRPG() {
  return await prisma.$queryRaw`SELECT * FROM games WHERE genre = 'J-RPG' ORDER BY created_at DESC;`;
}


const gamesRepository = {
  insert,
  deleteGame,
  getGames,
  duplicatedGame,
  searchGame,
  searchRecentGames,
  favorites,
  searchGenreJRPG,
};
export default gamesRepository;
