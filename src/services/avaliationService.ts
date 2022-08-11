import avaliationsRepository from "../repositories/avaliationsRepository";

async function createAvaliation(avaliation: any, user_id: number, game_id: number) {
  await avaliationsRepository.insert(avaliation, user_id, game_id);
}

async function deleteAvaliation(id: number, game_id: number){
  return await avaliationsRepository.deleteAvaliation(id, game_id);
}

const avaliationService = { createAvaliation, deleteAvaliation };
export default avaliationService;
