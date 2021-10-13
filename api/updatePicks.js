import { createToken } from "./createToken";
import axios from 'axios'
import {baseURL} from './baseURL';


export const updatePicks = async ( picksArray ) => {
    const playerURL = baseURL + '/picks';
    const header = await createToken();
    const body = picksArray

    try {
      const response = await axios.patch(playerURL, body, header )
      return response
    } catch (e) {
      console.error(e);
    }
  }

  