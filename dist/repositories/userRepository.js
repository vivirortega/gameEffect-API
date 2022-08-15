"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = exports.getDataByEmail = exports.getDataByUsername = exports.getUserByEmail = exports.getUserByUsername = exports.getUser = exports.checkUsername = exports.checkEmail = exports.insert = void 0;
const database_1 = __importDefault(require("../config/database"));
async function insert(user) {
    await database_1.default.users.create({ data: user });
}
exports.insert = insert;
async function checkEmail(email) {
    return await database_1.default.users.findFirst({ where: { email } });
}
exports.checkEmail = checkEmail;
async function checkUsername(username) {
    return await database_1.default.users.findFirst({ where: { username } });
}
exports.checkUsername = checkUsername;
async function getUser(id) {
    return await database_1.default.users.findFirst({
        where: { id: id },
        select: { username: true, icon: true, avaliations: true, bio: true },
    });
}
exports.getUser = getUser;
async function getUserByUsername(login) {
    return await database_1.default.users.findFirst({
        where: { username: login },
        select: { icon: true },
    });
}
exports.getUserByUsername = getUserByUsername;
async function getUserByEmail(login) {
    return await database_1.default.users.findFirst({
        where: { email: login },
        select: { icon: true },
    });
}
exports.getUserByEmail = getUserByEmail;
async function getDataByUsername(login) {
    return await database_1.default.users.findFirst({
        where: { username: login },
        select: { username: true, bio: true, id: true, icon: true },
    });
}
exports.getDataByUsername = getDataByUsername;
async function getDataByEmail(login) {
    return await database_1.default.users.findFirst({
        where: { email: login },
        select: { username: true, bio: true, id: true, icon: true },
    });
}
exports.getDataByEmail = getDataByEmail;
async function updateProfile(id, bio, icon) {
    await database_1.default.users.updateMany({ where: { id: id }, data: { bio, icon } });
}
exports.updateProfile = updateProfile;
const userRepository = {
    insert,
    checkEmail,
    checkUsername,
    getUser,
    getUserByUsername,
    getUserByEmail,
    getDataByUsername,
    getDataByEmail,
    updateProfile
};
exports.default = userRepository;
