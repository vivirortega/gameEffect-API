"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avaliationsRepository_1 = __importDefault(require("../repositories/avaliationsRepository"));
async function createAvaliation(avaliation, user_id, game_id) {
    await avaliationsRepository_1.default.insert(avaliation, user_id, game_id);
}
async function deleteAvaliation(id, game_id) {
    return await avaliationsRepository_1.default.deleteAvaliation(id, game_id);
}
async function getAllAvaliations(game_id) {
    return await avaliationsRepository_1.default.getAllAvaliations(game_id);
}
async function getRate(game_id) {
    return await avaliationsRepository_1.default.getAvaliationRate(game_id);
}
async function getRecent(user_id) {
    return await avaliationsRepository_1.default.getRecentAvaliations(user_id);
}
const avaliationService = { createAvaliation, deleteAvaliation, getAllAvaliations, getRate, getRecent };
exports.default = avaliationService;
