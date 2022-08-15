"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editSchema = exports.loginSchema = exports.signupSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.signupSchema = joi_1.default.object({
    icon: joi_1.default.string().allow(null, ""),
    bio: joi_1.default.string().allow(null, ""),
    username: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.loginSchema = joi_1.default.object({
    login: [joi_1.default.string().email().required(), joi_1.default.string().required()],
    password: joi_1.default.string().required(),
});
exports.editSchema = joi_1.default.object({
    icon: joi_1.default.string().allow(null, ""),
    bio: joi_1.default.string().required(),
});
