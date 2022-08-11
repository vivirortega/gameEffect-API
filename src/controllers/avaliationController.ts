import { Request, Response } from "express";
import avaliationService from "../services/avaliationService";

export async function createAvaliation(req: Request, res: Response) {
  const avaliation = req.body;
  const { user } = res.locals;
  const id = parseInt(req.params.id);
  await avaliationService.createAvaliation(avaliation, user.id, id);
  res.sendStatus(201);
}

export async function deleteAvaliation(req: Request, res: Response){
  const id = parseInt(req.params.id);
  const idgame = parseInt(req.params.id);
  await avaliationService.deleteAvaliation(id, idgame);
  res.sendStatus(200);
}