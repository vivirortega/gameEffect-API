import { Router } from "express";
import { getUser, updateUser } from "../controllers/userController";
import { tokenValidator } from "../middlewares/tokenValidate";
import schemaValidator from "../middlewares/schemaValidator";
import { editSchema } from "../schemas/authSchema";

const userRouter = Router();

userRouter.get("/user/:id", tokenValidator, getUser);
userRouter.put("/user/:id", tokenValidator, schemaValidator(editSchema), updateUser);

export default userRouter;
