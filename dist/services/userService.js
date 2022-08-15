"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gamesRepository_1 = __importDefault(require("../repositories/gamesRepository"));
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
async function getUser(id) {
    return await userRepository_1.default.getUser(id);
}
async function getUserAndUpdate(id, bio, icon) {
    return await userRepository_1.default.updateProfile(id, bio, icon);
}
async function favorites(user_id) {
    return await gamesRepository_1.default.favorites(user_id);
}
const userService = { getUser, getUserAndUpdate, favorites };
exports.default = userService;
