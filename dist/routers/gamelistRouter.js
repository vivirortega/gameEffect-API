"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamelistController_1 = require("../controllers/gamelistController");
const tokenValidate_1 = require("../middlewares/tokenValidate");
const gamelistSchema_1 = require("../schemas/gamelistSchema");
const schemaValidator_1 = __importDefault(require("../middlewares/schemaValidator"));
const gamelistRouter = (0, express_1.Router)();
gamelistRouter.post("/game/:id/gamelist", (0, schemaValidator_1.default)(gamelistSchema_1.gamelistSchema), tokenValidate_1.tokenValidator, gamelistController_1.createGamelist);
exports.default = gamelistRouter;
