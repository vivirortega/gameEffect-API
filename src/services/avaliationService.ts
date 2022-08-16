import avaliationsRepository from "../repositories/avaliationsRepository";

async function createAvaliation(
  avaliation: any,
  user_id: number,
  game_id: number
) {
  await avaliationsRepository.insert(avaliation, user_id, game_id);
}

async function deleteAvaliation(id: number, game_id: number) {
  return await avaliationsRepository.deleteAvaliation(id, game_id);
}

async function getAllAvaliations(game_id: number) {
  return await avaliationsRepository.getAllAvaliations(game_id);
}

async function getRate(game_id: number) {
  return await avaliationsRepository.getAvaliationRate(game_id);
}

async function getRecent(user_id: number) {
  return await avaliationsRepository.getRecentAvaliations(user_id);
}

async function getAllReviews(game_id: number) {
  return await avaliationsRepository.getAllReviews(game_id);
}

const avaliationService = {
  createAvaliation,
  deleteAvaliation,
  getAllAvaliations,
  getRate,
  getRecent,
  getAllReviews,
};
export default avaliationService;
