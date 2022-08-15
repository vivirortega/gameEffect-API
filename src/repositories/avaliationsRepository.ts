import prisma from "../config/database";

export async function insert(
  avaliation: any,
  user_id: number,
  game_id: number
) {
  await prisma.avaliations.create({
    data: { ...avaliation, user_id, game_id },
  });
}

export async function getAllAvaliations(id: number) {
  const idNumber = id;
  return await prisma.$queryRaw`SELECT * from avaliations
  JOIN games AS g ON game_id = g.id
  JOIN users AS u ON avaliations.user_id = u.id
  WHERE game_id = ${idNumber}
  ORDER BY avaliations.created_at DESC`;
}

export async function getAvaliationRate(game_id: number) {
  const gameId = game_id;
  return await prisma.$queryRaw`SELECT CAST(AVG(rate) AS DECIMAL(10,1)) as rate
  FROM AVALIATIONS 
  WHERE game_id = ${gameId};`;
}

export async function getAllMostRatedGames() {
  return await prisma.$queryRaw`SELECT name, COUNT(rate)
  from avaliations
  JOIN games ON game_id = games.id
  GROUP BY name;
  `;
}

export async function deleteAvaliation(id: number, game_id: number) {
  return await prisma.avaliations.delete({
    where: {
      id: id,
    },
  });
}

export async function getRecentAvaliations(user_id: number) {
  const userId = user_id;
  console.log(userId);
  return await prisma.$queryRaw`SELECT "pictureUrl", name, rate
  from avaliations
  JOIN games ON game_id = games.id
  WHERE avaliations.user_id = ${userId}
  ORDER BY avaliations.created_at DESC`;
}

const avaliationsRepository = {
  insert,
  deleteAvaliation,
  getAllAvaliations,
  getAvaliationRate,
  getAllMostRatedGames,
  getRecentAvaliations,
};
export default avaliationsRepository;
