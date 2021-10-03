import { createToken } from "./createToken";
import axios from 'axios'

export const updatePicks = async ( picksArray ) => {
    const playerURL = 'http://localhost:5000/players/picks';
    const header = await createToken();
    const body = picksArray

    try {
      const response = await axios.patch(playerURL, body, header )
      return response
    } catch (e) {
      console.error(e);
    }
  }

  