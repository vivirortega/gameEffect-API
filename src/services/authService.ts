import authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "@prisma/client";

async function signup(user: users) {
  const { email, password, username } = user;
  const userExists = await authRepository.checkEmail(email);
  if (userExists) {
    throw {
      type: "unauthorized",
      message: "email already registered",
    };
  }

  const usernameExists = await authRepository.checkUsername(username);
  if (usernameExists) {
    throw {
      type: "unauthorized",
      message: "username already registered",
    };
  }

  const SALT = 10;
  user.password = await bcrypt.hash(password, SALT);
  await authRepository.insert(user);
}

const authService = { signup };
export default authService;
