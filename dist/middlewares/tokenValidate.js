"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function tokenValidator(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace("Bearer ", "").trim();
    const secretKey = process.env.JWT_SECRET;
    try {
        const user = jsonwebtoken_1.default.verify(token, secretKey);
        res.locals.user = user;
    }
    catch (e) {
        throw {
            type: "unauthorized",
            message: "No Token",
        };
    }
    next();
}
exports.tokenValidator = tokenValidator;
