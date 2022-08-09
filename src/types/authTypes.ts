import { users, games } from "@prisma/client";

export type loginService = Omit<users, "icon">

export type gameService = Omit<games, "id" | "user_id">