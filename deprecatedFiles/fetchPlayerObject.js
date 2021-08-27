import { useQuery } from "react-query";

export const fetchPlayer = (uid) => {
    const playerURL = 'http://localhost:5000/players';

    // // const uid = 'bd9FT14RyfOGSxYDKMFzmJ7ni8N2'
    // const uid = getCurrentUser().uid
    
    try {
      const result = useQuery("player", async () => await axios.get(playerURL, {
          headers: {
            'uid': uid
          }
        })
      )
      return result
    } catch (e) {
      console.error(e);
    }
  };