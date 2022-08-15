"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const gameRouter_1 = __importDefault(require("./gameRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const gamelistRouter_1 = __importDefault(require("./gamelistRouter"));
const router = (0, express_1.Router)();
router.use(authRouter_1.default);
router.use(gameRouter_1.default);
router.use(userRouter_1.default);
router.use(gamelistRouter_1.default);
exports.default = router;
