import { Request, Response } from "express";
import authService from "../services/authService";

export async function signUp(req: Request, res: Response) {
  const user = req.body;
  await authService.signup(user);
  res.sendStatus(201);
}
