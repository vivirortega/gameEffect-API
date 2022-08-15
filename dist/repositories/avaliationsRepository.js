"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecentAvaliations = exports.deleteAvaliation = exports.getAllMostRatedGames = exports.getAvaliationRate = exports.getAllAvaliations = exports.insert = void 0;
const database_1 = __importDefault(require("../config/database"));
async function insert(avaliation, user_id, game_id) {
    await database_1.default.avaliations.create({
        data: Object.assign(Object.assign({}, avaliation), { user_id, game_id }),
    });
}
exports.insert = insert;
async function getAllAvaliations(id) {
    const idNumber = id;
    return await database_1.default.$queryRaw `SELECT * from avaliations
  JOIN games AS g ON game_id = g.id
  JOIN users AS u ON avaliations.user_id = u.id
  WHERE game_id = ${idNumber}
  ORDER BY avaliations.created_at DESC`;
}
exports.getAllAvaliations = getAllAvaliations;
async function getAvaliationRate(game_id) {
    const gameId = game_id;
    return await database_1.default.$queryRaw `SELECT CAST(AVG(rate) AS DECIMAL(10,1)) as rate
  FROM AVALIATIONS 
  WHERE game_id = ${gameId};`;
}
exports.getAvaliationRate = getAvaliationRate;
async function getAllMostRatedGames() {
    return await database_1.default.$queryRaw `SELECT name, COUNT(rate)
  from avaliations
  JOIN games ON game_id = games.id
  GROUP BY name;
  `;
}
exports.getAllMostRatedGames = getAllMostRatedGames;
async function deleteAvaliation(id, game_id) {
    return await database_1.default.avaliations.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteAvaliation = deleteAvaliation;
async function getRecentAvaliations(user_id) {
    const userId = user_id;
    return await database_1.default.$queryRaw `SELECT "pictureUrl", name, rate
  from avaliations
  JOIN games ON game_id = games.id
  WHERE avaliations.user_id = ${userId}
  ORDER BY avaliations.created_at DESC`;
}
exports.getRecentAvaliations = getRecentAvaliations;
const avaliationsRepository = {
    insert,
    deleteAvaliation,
    getAllAvaliations,
    getAvaliationRate,
    getAllMostRatedGames,
    getRecentAvaliations,
};
exports.default = avaliationsRepository;
