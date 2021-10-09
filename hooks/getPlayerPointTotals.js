import { createToken } from './api/createToken';

export const getPlayerPointTotals = async (week, limit) => {
    const playerURL = `http://localhost:5000/players/point-totals?week=${encodeURIComponent(week)}&limit=${encodeURIComponent(limit)}`;
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

