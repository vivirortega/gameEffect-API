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

export async function getUserByUsername(login: string) {
  return await prisma.users.findFirst({
    where: { username: login },
    select: { icon: true },
  });
}

export async function getUserByEmail(login: string) {
  return await prisma.users.findFirst({
    where: { email: login },
    select: { icon: true },
  });
}

export async function getUsernameByUsername(login: string) {
  return await prisma.users.findFirst({
    where: { username: login },
    select: { username: true },
  });
}

export async function getUsernameByEmail(login: string) {
  return await prisma.users.findFirst({
    where: { email: login },
    select: { username: true },
  });
}

export async function updateProfile(id: number, username: string, icon: string) {
  await prisma.users.update({where: {id: id}, data: {username, icon}});
}

const userRepository = {
  insert,
  checkEmail,
  checkUsername,
  getUser,
  getUserByUsername,
  getUserByEmail,
  getUsernameByUsername,
  getUsernameByEmail,
  updateProfile
};
export default userRepository;
