import { Request, Response } from "express";
import gamelistService from "../services/gamelistService";

export async function createGamelist(req: Request, res: Response) {
  const avaliation = req.body;
  console.log(req.body)
  const { user } = res.locals;
  const id = parseInt(req.params.id);
  await gamelistService.insertGamelist(id, user.id, avaliation);
  res.sendStatus(201);
}

