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

export async function deleteAvaliation(id: number, game_id: number) {
  return await prisma.avaliations.delete({
    where: {
      id: id,
    },
  });
}
const avaliationsRepository = { insert, deleteAvaliation, getAllAvaliations };
export default avaliationsRepository;
