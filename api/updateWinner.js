import { createToken } from "./createToken";
import axios from 'axios'
import {baseURL} from './baseURL';


export const updateWinner = async ( winner, game, week ) => {
    const playerURL = baseURL + '/winners';
    const header = await createToken();
    const body = {
        winner: winner,
        game: game,
        week: week,
    }

    try {
      const response = await axios.patch(playerURL, body, header )
      return response
    } catch (e) {
      console.error(e);
    }
  }

  