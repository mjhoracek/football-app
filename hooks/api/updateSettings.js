import { createToken } from "./createToken";
import axios from 'axios'

export const updateSettings = async ( settings ) => {
    const playerURL = 'http://localhost:5000/players/settings';
    const header = await createToken();
    const body = settings

    try {
      const response = await axios.patch(playerURL, body, header )
      return response
    } catch (e) {
      console.error(e);
    }
  }

  