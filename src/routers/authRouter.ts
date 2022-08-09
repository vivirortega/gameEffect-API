import { Router } from "express";
import { signUp } from "../controllers/authController";
import { signupSchema } from "../schemas/authSchema";
import schemaValidator from "../middlewares/schemaValidator";

const authRouter = Router();

authRouter.post("/signup", schemaValidator(signupSchema), signUp);

export default authRouter;