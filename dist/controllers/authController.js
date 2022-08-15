"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const authService_1 = __importDefault(require("../services/authService"));
async function signUp(req, res) {
    const user = req.body;
    await authService_1.default.signup(user);
    res.sendStatus(201);
}
exports.signUp = signUp;
async function login(req, res) {
    const data = req.body;
    const token = await authService_1.default.login(req.body);
    res.status(200).send(token);
}
exports.login = login;
