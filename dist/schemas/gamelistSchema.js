"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamelistSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.gamelistSchema = joi_1.default.object({
    gamelist: joi_1.default.boolean().required()
});
