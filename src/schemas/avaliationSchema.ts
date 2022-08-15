import joi from "joi";
import { avaliationService } from "../types/authTypes";

export const avaliationSchema = joi.object<avaliationService>({
  review: joi.string().required(),
  rate: joi.number().required(),
  isFavorite: joi.boolean().allow(null, ''),
});