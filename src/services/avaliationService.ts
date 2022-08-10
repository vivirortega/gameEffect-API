import avaliationsRepository from "../repositories/avaliationsRepository";

async function createAvaliation(avaliation: any, user_id: number, game_id: number) {
  await avaliationsRepository.insert(avaliation, user_id, game_id);
}

const avaliationService = { createAvaliation };
export default avaliationService;
