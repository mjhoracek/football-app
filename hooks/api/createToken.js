import { getToken } from "../../firebase/getToken";
import { getCurrentUser } from "../../firebase/getCurrentUser";

export const createToken = async () => {
    const user = getCurrentUser();
    const token = user && (await getToken());
  
    const payloadHeader = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'user': user.email,
        'uid': user.uid,
      },
    };
    return payloadHeader;
  }