import prisma from "../config/database";

export async function insert(avaliation: any, user_id: number, game_id: number) {
  await prisma.avaliations.create({ data: { ...avaliation, user_id, game_id } });
}

const avaliationsRepository = { insert };
export default avaliationsRepository;
