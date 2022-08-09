import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function tokenValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();
  const secretKey = process.env.JWT_SECRET;

  try {
    const user:any = jwt.verify(token, secretKey);
    res.locals.user = user;
  } catch (e) {
    throw {
      type: "unauthorized",
      message: "No Token",
    };
  }

  next();
}