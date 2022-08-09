import joi from "joi";
import { users } from "@prisma/client";
import { loginService } from "../types/authTypes";

export const signupSchema = joi.object<users>({
  icon: joi.string().allow(null, ''),
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const loginSchema = joi.object<loginService>({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
