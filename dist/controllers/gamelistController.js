"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGamelist = void 0;
const gamelistService_1 = __importDefault(require("../services/gamelistService"));
async function createGamelist(req, res) {
    const avaliation = req.body;
    const { user } = res.locals;
    const id = parseInt(req.params.id);
    await gamelistService_1.default.insertGamelist(id, user.id, avaliation);
    res.sendStatus(201);
}
exports.createGamelist = createGamelist;
