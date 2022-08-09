import { Router } from "express";
import { getUser } from "../controllers/userController";
import { tokenValidator } from "../middlewares/tokenValidate";

const userRouter = Router();

userRouter.get("/user/:id", tokenValidator, getUser);

export default userRouter;
