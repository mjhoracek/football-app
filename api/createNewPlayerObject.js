import { createToken } from './createToken'
import axios from 'axios'
import {baseURL} from './baseURL';


export const createNewPlayerObject = async (playerName) => {
    const playerURL = baseURL;
    const header = await createToken();
  
    const payload = {playerName : playerName};
  
      try {
            const resp = await axios.post(playerURL, payload, header);
            console.log('New Player Created')
            console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
  };