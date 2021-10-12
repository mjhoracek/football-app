import { createToken } from "./createToken";
import axios from 'axios'
import {baseURL} from './baseURL';


export const getPlayerObject = async () => {
    const playerURL = baseURL;
    const header = await createToken();
    
    try {
      const res = await axios.get(playerURL, header)

      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

