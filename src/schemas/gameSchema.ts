import joi from "joi";
import { games } from "@prisma/client";

export const gameSchema = joi.object<games>({
  name: joi.string().required(),
  genre: joi.string().required(),
  releaseDate: joi.string().required(),
  description: joi.string().required(),
  pictureUrl: joi.string().required()
});
