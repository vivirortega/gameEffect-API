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

async function login(user: any) {
  const { login, password } = user;
  const userWithEmailExists = await authRepository.checkEmail(login);
  const userWithUsernameExists = await authRepository.checkUsername(login);
  const userExists = userWithEmailExists || userWithUsernameExists;

  if(!userExists){
    throw {
      type: "unauthorized",
      message: "Wrong email/username or password",
    };
  }

  const validPassword = await bcrypt.compare(password, userExists.password);
  if (!validPassword) {
    throw {
      type: "unauthorized",
      message: "Wrong email/username or password",
    };
  }

  const token = jwt.sign(
    { id: userExists.id, email: userExists.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return { token };
}

const authService = { signup, login };
export default authService;
