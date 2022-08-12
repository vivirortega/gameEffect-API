import { Router } from "express";
import { getUser, updateUser } from "../controllers/userController";
import { tokenValidator } from "../middlewares/tokenValidate";

const userRouter = Router();

userRouter.get("/user/:id", tokenValidator, getUser);
userRouter.put("/user/:id", tokenValidator, updateUser);

export default userRouter;
