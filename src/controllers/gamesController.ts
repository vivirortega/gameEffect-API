import { Request, Response } from "express";
import gameService from "../services/gameService";
import gamesRepository from "../repositories/gamesRepository";

export async function createGame(req: Request, res: Response) {
  const game = req.body;
  const { user } = res.locals;
  console.log(user.id);
  await gameService.insertGame(game, user.id);
  res.sendStatus(201);
}

export async function getGame(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const game = await gameService.getGame(id);
  return res.send(game);
}

export async function deleteGame(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  await gamesRepository.deleteGame(id);
  res.sendStatus(200);
}
