import { createToken } from "./createToken";
import axios from 'axios'
import { baseURL } from "./baseURL";

export const updateSettings = async ( settings ) => {
    const playerURL = baseURL + '/settings';
    const header = await createToken();
    const body = settings

    try {
      const response = await axios.patch(playerURL, body, header )
      return response
    } catch (e) {
      console.error(e);
    }
  }

  