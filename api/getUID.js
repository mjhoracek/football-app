import { getCurrentUser } from "../../firebase/getCurrentUser";

export const getUID = async () => {
  const user = getCurrentUser();
  if(user){
    return user.uid
  }
  return 'no user'
}