import { Router } from "express";
import { getUser, updateUser, renderFavorites, getRecent} from "../controllers/userController";
import { tokenValidator } from "../middlewares/tokenValidate";
import schemaValidator from "../middlewares/schemaValidator";
import { editSchema } from "../schemas/authSchema";

const userRouter = Router();

userRouter.get("/user/:id", tokenValidator, getUser);
userRouter.put("/user/:id", tokenValidator, schemaValidator(editSchema), updateUser);
userRouter.get("/:id", tokenValidator,  renderFavorites);
userRouter.get("/:id/recent", tokenValidator, getRecent);

export default userRouter;
