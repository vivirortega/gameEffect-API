import gamesRepository from "../repositories/gamesRepository";
import userRepository from "../repositories/userRepository";

async function getUser(id: number) {
  return await userRepository.getUser(id);
  
}

async function getUserAndUpdate(id: number, bio: string, icon: string){
  return await userRepository.updateProfile(id, bio, icon);
}

async function favorites(user_id: number){
  return await gamesRepository.favorites(user_id);
}

const userService = { getUser, getUserAndUpdate, favorites };
export default userService;
