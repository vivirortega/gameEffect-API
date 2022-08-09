import joi from "joi";
import { users } from "@prisma/client";

export const signupSchema = joi.object<users>({
  icon: joi.string().allow(null, ''),
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
