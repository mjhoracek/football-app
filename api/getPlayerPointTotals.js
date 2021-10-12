import { createToken } from './createToken';
import {baseURL} from './baseURL';


export const getPlayerPointTotals = async (week, limit) => {
    const playerURL = baseURL + `/point-totals?week=${encodeURIComponent(week)}&limit=${encodeURIComponent(limit)}`;
    const header = await createToken();
    const { headers } = header
    
    try {
      const res = await fetch(playerURL, {
        method: 'GET',
        headers: headers,
      });
      return res.json();

    } catch (e) {
      console.error(e);
    }
  }

