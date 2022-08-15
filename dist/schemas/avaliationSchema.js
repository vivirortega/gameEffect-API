"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.avaliationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.avaliationSchema = joi_1.default.object({
    review: joi_1.default.string().required(),
    rate: joi_1.default.number().required(),
    isFavorite: joi_1.default.boolean().allow(null, ''),
});
