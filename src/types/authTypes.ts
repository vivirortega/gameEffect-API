import { users, games, avaliations } from "@prisma/client";

export type loginService = Omit<users, "icon">

export type gameService = Omit<games, "id" | "user_id">

export type avaliationService = Omit<avaliations, "id" | "user_id" | "game_id">