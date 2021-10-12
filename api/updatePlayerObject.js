import { createToken } from "./createToken";
import axios from 'axios'
import { baseURL } from "./baseURL";

export const updatePlayerObject = async ( newObj ) => {
    const playerURL = baseURL;
    const header = await createToken();
    const body = newObj
    console.log('update sent!')
    
    try {
      const res = await axios.patch(playerURL, body, header )
      console.log('update res', res)
    } catch (e) {
      console.error(e);
    }
  }

  