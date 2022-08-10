import joi from "joi";
import { avaliationService } from "../types/authTypes";

export const avaliationSchema = joi.object<avaliationService>({
  review: joi.string().allow(null, ''),
  rate: joi.number().required(),
  isFavorite: joi.boolean().allow(null, ''),
  isPlayed: joi.boolean().required(),
  gamelist: joi.boolean().allow(null, ''),
});