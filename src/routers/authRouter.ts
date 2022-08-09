import { Router } from "express";
import { signUp, login } from "../controllers/authController";
import { signupSchema, loginSchema } from "../schemas/authSchema";
import schemaValidator from "../middlewares/schemaValidator";
import { tokenValidator } from "../middlewares/tokenValidate";

const authRouter = Router();

authRouter.post("/signup", schemaValidator(signupSchema), signUp);
authRouter.post("/login", schemaValidator(loginSchema), login);

export default authRouter;