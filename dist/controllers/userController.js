"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecent = exports.renderFavorites = exports.updateUser = exports.getUser = void 0;
const avaliationService_1 = __importDefault(require("../services/avaliationService"));
const userService_1 = __importDefault(require("../services/userService"));
async function getUser(req, res) {
    const id = parseInt(req.params.id);
    const user = await userService_1.default.getUser(id);
    return res.send(user);
}
exports.getUser = getUser;
async function updateUser(req, res) {
    const id = parseInt(req.params.id);
    const data = req.body;
    const { bio, icon } = data;
    const user = await userService_1.default.getUserAndUpdate(id, bio, icon);
    return res.send(user);
}
exports.updateUser = updateUser;
async function renderFavorites(req, res) {
    const { user } = res.locals;
    const favorites = await userService_1.default.favorites(user.id);
    return res.send(favorites);
}
exports.renderFavorites = renderFavorites;
async function getRecent(req, res) {
    const { user } = res.locals;
    const recent = await avaliationService_1.default.getRecent(user.id);
    return res.send(recent);
}
exports.getRecent = getRecent;
