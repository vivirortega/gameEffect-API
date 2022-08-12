import prisma from "../config/database";

export async function insert(avaliation: any, user_id: number, game_id: number) {
  await prisma.avaliations.create({ data: { ...avaliation, user_id, game_id } });
}

export async function getAllAvaliations(id: number){
  return await prisma.avaliations.findMany({where: {game_id: id}});
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
