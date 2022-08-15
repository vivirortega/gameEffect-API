import { Request, Response } from "express";
import avaliationService from "../services/avaliationService";
import userService from "../services/userService";

export async function getUser(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = await userService.getUser(id);
  return res.send(user);
}

export async function updateUser(req: Request, res: Response){
  const id = parseInt(req.params.id);
  const data = req.body;
  const {bio, icon} = data;
  const user = await userService.getUserAndUpdate(id, bio, icon);
  return res.send(user);
}

export async function renderFavorites(req: Request, res: Response){
  const {user} = res.locals;
  const favorites = await userService.favorites(user.id);
  return res.send(favorites);
}

export async function getRecent(req: Request, res: Response){
  const {user} = res.locals;
  const recent = await avaliationService.getRecent(user.id);
  return res.send(recent);
}
