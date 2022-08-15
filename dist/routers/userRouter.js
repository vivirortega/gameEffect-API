"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const tokenValidate_1 = require("../middlewares/tokenValidate");
const schemaValidator_1 = __importDefault(require("../middlewares/schemaValidator"));
const authSchema_1 = require("../schemas/authSchema");
const userRouter = (0, express_1.Router)();
userRouter.get("/user/:id", tokenValidate_1.tokenValidator, userController_1.getUser);
userRouter.put("/user/:id", tokenValidate_1.tokenValidator, (0, schemaValidator_1.default)(authSchema_1.editSchema), userController_1.updateUser);
userRouter.get("/:id", tokenValidate_1.tokenValidator, userController_1.renderFavorites);
userRouter.get("/:id/recent", tokenValidate_1.tokenValidator, userController_1.getRecent);
userRouter.get("/:id/recent", tokenValidate_1.tokenValidator, userController_1.getRecent);
exports.default = userRouter;
