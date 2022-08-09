import { Router } from "express";
import authRouter from "./authRouter";
import gameRouter from "./gameRouter";
import userRouter from "./userRouter";

const router = Router();

router.use(authRouter);
router.use(gameRouter);
router.use(userRouter);

export default router;