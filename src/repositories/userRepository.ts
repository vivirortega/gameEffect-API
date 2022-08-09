import prisma from "../config/database";

export async function getUser(id: number) {
  console.log(id);
  return await prisma.users.findFirst({
    where: {
      id: id,
    },
  });
}

const userRepository = { getUser };
export default userRepository;
