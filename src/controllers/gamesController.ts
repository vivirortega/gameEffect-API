import { Request, Response } from "express";
import gameService from "../services/gameService";
import gamesRepository from "../repositories/gamesRepository";

export async function createGame(req: Request, res: Response) {
  const game = req.body;
  const { user } = res.locals;
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

export async function searchGame(req: Request, res: Response) {
  const { name } = req.query;
  const title = await gameService.searchGame(name.toString());
  return res.send(title);
}

export async function searchRecentGames(req: Request, res: Response) {
  const games = await gameService.searchRecentGames();
  return res.send(games);
}

export async function searchJrpg(req: Request, res: Response) {
  const jrpg = await gameService.searchGenreRpg();
  return res.send(jrpg);
}
