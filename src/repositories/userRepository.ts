import { users } from "@prisma/client";
import prisma from "../config/database";

export async function insert(user: users) {
  await prisma.users.create({ data: user });
}

export async function checkEmail(email: string) {
  return await prisma.users.findFirst({ where: { email } });
}

export async function checkUsername(username: string) {
  return await prisma.users.findFirst({ where: { username } });
}

export async function getUser(id: number) {
  return await prisma.users.findFirst({
    where: { id: id },
    select: { username: true, icon: true, avaliations: true },
  });
}

const userRepository = { insert, checkEmail, checkUsername, getUser };
export default userRepository;
