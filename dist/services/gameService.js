"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gamesRepository_1 = __importDefault(require("../repositories/gamesRepository"));
async function insertGame(game, user_id) {
    const { name, releaseDate } = game;
    const duplicated = await gamesRepository_1.default.duplicatedGame(releaseDate, name);
    if (duplicated) {
        throw {
            type: "conflict",
            message: "game already exist in our database",
        };
    }
    await gamesRepository_1.default.insert(game, user_id);
}
async function getGame(id) {
    return await gamesRepository_1.default.getGames(id);
}
async function searchGame(name) {
    return await gamesRepository_1.default.searchGame(name);
}
async function searchRecentGames() {
    return await gamesRepository_1.default.searchRecentGames();
}
async function searchGenreRpg() {
    return await gamesRepository_1.default.searchGenreJRPG();
}
const gameService = {
    insertGame,
    getGame,
    searchGame,
    searchRecentGames,
    searchGenreRpg
};
exports.default = gameService;
