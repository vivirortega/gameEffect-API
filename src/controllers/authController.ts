import { Request, Response } from "express";
import authService from "../services/authService";
import { loginService } from "../types/authTypes";

export async function signUp(req: Request, res: Response) {
  const user = req.body;
  await authService.signup(user);
  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const data = req.body;
  const token = await authService.login(req.body);
  res.status(200).send(token);
}
