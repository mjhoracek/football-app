import { createToken } from "./createToken";
import axios from 'axios'

export const updatePlayerObject = async ( newObj ) => {
    const playerURL = 'http://localhost:5000/players';
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

  