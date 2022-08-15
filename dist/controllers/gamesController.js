"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchJrpg = exports.searchRecentGames = exports.searchGame = exports.deleteGame = exports.getGame = exports.createGame = void 0;
const gameService_1 = __importDefault(require("../services/gameService"));
const gamesRepository_1 = __importDefault(require("../repositories/gamesRepository"));
async function createGame(req, res) {
    const game = req.body;
    const { user } = res.locals;
    await gameService_1.default.insertGame(game, user.id);
    res.sendStatus(201);
}
exports.createGame = createGame;
async function getGame(req, res) {
    const id = parseInt(req.params.id);
    const game = await gameService_1.default.getGame(id);
    return res.send(game);
}
exports.getGame = getGame;
async function deleteGame(req, res) {
    const id = parseInt(req.params.id);
    await gamesRepository_1.default.deleteGame(id);
    res.sendStatus(200);
}
exports.deleteGame = deleteGame;
async function searchGame(req, res) {
    console.log(req.query);
    const { name } = req.query;
    const title = await gameService_1.default.searchGame(name.toString());
    console.log(title);
    return res.send(title);
}
exports.searchGame = searchGame;
async function searchRecentGames(req, res) {
    const games = await gameService_1.default.searchRecentGames();
    return res.send(games);
}
exports.searchRecentGames = searchRecentGames;
async function searchJrpg(req, res) {
    const jrpg = await gameService_1.default.searchGenreRpg();
    return res.send(jrpg);
}
exports.searchJrpg = searchJrpg;
