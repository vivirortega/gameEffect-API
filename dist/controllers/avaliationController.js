"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRate = exports.getAllAvaliations = exports.deleteAvaliation = exports.createAvaliation = void 0;
const avaliationService_1 = __importDefault(require("../services/avaliationService"));
async function createAvaliation(req, res) {
    const avaliation = req.body;
    const { user } = res.locals;
    const id = parseInt(req.params.id);
    await avaliationService_1.default.createAvaliation(avaliation, user.id, id);
    res.sendStatus(201);
}
exports.createAvaliation = createAvaliation;
async function deleteAvaliation(req, res) {
    const id = parseInt(req.params.id);
    const idgame = parseInt(req.params.id);
    await avaliationService_1.default.deleteAvaliation(id, idgame);
    res.sendStatus(200);
}
exports.deleteAvaliation = deleteAvaliation;
async function getAllAvaliations(req, res) {
    const idgame = parseInt(req.params.id);
    const avaliations = await avaliationService_1.default.getAllAvaliations(idgame);
    return res.send(avaliations);
}
exports.getAllAvaliations = getAllAvaliations;
async function getAllRate(req, res) {
    const idgame = parseInt(req.params.id);
    const avaliations = await avaliationService_1.default.getRate(idgame);
    return res.send(avaliations);
}
exports.getAllRate = getAllRate;
