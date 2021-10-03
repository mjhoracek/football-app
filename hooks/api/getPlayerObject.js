import { createToken } from "./createToken";
import axios from 'axios'

export const getPlayerObject = async () => {
    const playerURL = 'http://localhost:5000/players';
    const header = await createToken();
    
    try {
      const res = await axios.get(playerURL, header)

      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

