import userRepository from "../repositories/userRepository";

async function getUser(id: number) {
  return await userRepository.getUser(id);
}

async function getUserAndUpdate(id: number, bio: string, icon: string){
  return await userRepository.updateProfile(id, bio, icon);
}

const userService = { getUser, getUserAndUpdate };
export default userService;
