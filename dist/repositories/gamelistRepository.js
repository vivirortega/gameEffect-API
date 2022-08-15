"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertGamelist = void 0;
const database_1 = __importDefault(require("../config/database"));
async function insertGamelist(user_id, game_id, gamelist) {
    await database_1.default.gamelist.create({ data: { user_id, game_id, gamelist } });
}
exports.insertGamelist = insertGamelist;
const gamelistRepository = { insertGamelist };
exports.default = gamelistRepository;
