"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function signup(user) {
    const { email, password, username } = user;
    const userExists = await userRepository_1.default.checkEmail(email);
    if (userExists) {
        throw {
            type: "unauthorized",
            message: "email already registered",
        };
    }
    const usernameExists = await userRepository_1.default.checkUsername(username);
    if (usernameExists) {
        throw {
            type: "unauthorized",
            message: "username already registered",
        };
    }
    const SALT = 10;
    user.password = await bcrypt_1.default.hash(password, SALT);
    await userRepository_1.default.insert(user);
}
async function login(user) {
    const { login, password } = user;
    const userWithEmailExists = await userRepository_1.default.checkEmail(login);
    const userWithUsernameExists = await userRepository_1.default.checkUsername(login);
    const userExists = userWithEmailExists || userWithUsernameExists;
    if (!userExists) {
        throw {
            type: "unauthorized",
            message: "Wrong email/username or password",
        };
    }
    const validPassword = await bcrypt_1.default.compare(password, userExists.password);
    if (!validPassword) {
        throw {
            type: "unauthorized",
            message: "Wrong email/username or password",
        };
    }
    const getUsernameByUsername = await userRepository_1.default.getDataByUsername(login);
    const getUsernameByEmail = await userRepository_1.default.getDataByEmail(login);
    const userinfo = getUsernameByUsername || getUsernameByEmail;
    const token = jsonwebtoken_1.default.sign({ id: userExists.id, email: userExists.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    return { token, userinfo };
}
const authService = { signup, login };
exports.default = authService;
