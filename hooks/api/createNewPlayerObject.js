import { createToken } from './createToken'
import axios from 'axios'


export const createNewPlayerObject = async () => {
    const playerURL = 'http://localhost:5000/players';
    const header = await createToken();
  
    const payload = null;
  
      try {
            const resp = await axios.post(playerURL, payload, header);
            console.log('New Player Created')
            console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
  };