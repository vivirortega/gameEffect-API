import { Router } from "express";
import authRouter from "./authRouter";
import gameRouter from "./gameRouter";
import userRouter from "./userRouter";
import gamelistRouter from "./gamelistRouter";

const router = Router();

router.use(authRouter);
router.use(gameRouter);
router.use(userRouter);
router.use(gamelistRouter);

export default router;