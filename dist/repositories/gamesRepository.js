"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchGenreJRPG = exports.favorites = exports.searchRecentGames = exports.duplicatedGame = exports.deleteGame = exports.searchGame = exports.getGames = exports.insert = void 0;
const database_1 = __importDefault(require("../config/database"));
async function insert(game, user_id) {
    await database_1.default.games.create({ data: Object.assign(Object.assign({}, game), { user_id }) });
}
exports.insert = insert;
async function getGames(id) {
    return await database_1.default.games.findFirst({
        where: {
            id: id,
        },
    });
}
exports.getGames = getGames;
async function searchGame(name) {
    return await database_1.default.games.findMany({
        where: {
            name: {
                contains: name,
                mode: "insensitive",
            },
        },
    });
}
exports.searchGame = searchGame;
async function deleteGame(id) {
    return await database_1.default.games.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteGame = deleteGame;
async function duplicatedGame(releaseDate, name) {
    return await database_1.default.games.findFirst({
        where: {
            releaseDate: releaseDate,
            name: name,
        },
    });
}
exports.duplicatedGame = duplicatedGame;
async function searchRecentGames() {
    return await database_1.default.$queryRaw `SELECT * FROM games ORDER BY created_at DESC`;
}
exports.searchRecentGames = searchRecentGames;
async function favorites(user_id) {
    const userId = user_id;
    return await database_1.default.$queryRaw `SELECT games."pictureUrl" as picture, games."name", "isFavorite"
  from avaliations
  JOIN games ON game_id = games.id
  WHERE "isFavorite" = true AND avaliations.user_id = ${userId}
  ORDER BY avaliations.created_at DESC;
`;
}
exports.favorites = favorites;
async function searchGenreJRPG() {
    return await database_1.default.$queryRaw `SELECT * FROM games WHERE genre = 'J-RPG'`;
}
exports.searchGenreJRPG = searchGenreJRPG;
const gamesRepository = {
    insert,
    deleteGame,
    getGames,
    duplicatedGame,
    searchGame,
    searchRecentGames,
    favorites,
    searchGenreJRPG,
};
exports.default = gamesRepository;
