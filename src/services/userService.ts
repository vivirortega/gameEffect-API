import userRepository from "../repositories/userRepository";

async function getUser(id: number) {
  await userRepository.getUser(id);
}

const userService = { getUser };
export default userService;
