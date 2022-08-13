import joi from "joi";
import {gamelist } from "@prisma/client";

export const gamelistSchema = joi.object<gamelist>({
  gamelist: joi.boolean().required()
});