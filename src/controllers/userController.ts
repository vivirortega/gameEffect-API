import { Request, Response } from "express";
import userService from "../services/userService";

export async function getUser(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = await userService.getUser(id);
  return res.send(user);
}