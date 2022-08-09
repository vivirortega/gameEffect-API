import { users } from "@prisma/client";

export type loginService = Omit<users, "icon">