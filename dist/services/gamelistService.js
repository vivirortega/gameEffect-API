"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gamelistRepository_1 = __importDefault(require("../repositories/gamelistRepository"));
async function insertGamelist(game_id, user_id, gamelist) {
    await gamelistRepository_1.default.insertGamelist(game_id, user_id, gamelist);
}
const gamelistService = { insertGamelist };
exports.default = gamelistService;
