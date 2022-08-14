import joi from "joi";
import { users } from "@prisma/client";
import { loginService } from "../types/authTypes";

export const signupSchema = joi.object<users>({
  icon: joi.string().allow(null, ""),
  bio: joi.string().allow(null, ""),
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const loginSchema = joi.object({
  login: [joi.string().email().required(), joi.string().required()],
  password: joi.string().required(),
});

export const editSchema = joi.object({
  icon: joi.string().allow(null, ""),
  bio: joi.string().required(),
});
