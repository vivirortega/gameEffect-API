"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.gameSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    genre: joi_1.default.string().required(),
    releaseDate: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    pictureUrl: joi_1.default.string().required()
});
