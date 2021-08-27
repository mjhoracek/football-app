import { useQuery } from 'react-query'
import axios from 'axios'
import { getToken } from '../firebase/getToken';
import { getCurrentUser } from '../firebase/getCurrentUser';

const url = 'http://localhost:5000/posts';
const playerURL = 'http://localhost:5000/players';

const createToken = async () => {
  const user = getCurrentUser();
  const token = user && (await getToken());

  const payloadHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'user': user?.email,
      'uid': user?.uid
    },
  };
  return payloadHeader;
}


export const fetchPosts = () => {
  
  const result = useQuery("posts", async () => fetch(url).then(res => res.json()))
  return result
};



export const fetchPlayer = (uid) => {
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



export const sendPostRequest = async ( newPost ) => {
  const header = await createToken();

  const payload = newPost;

    try {
          const resp = await axios.post(url, payload, header);
          console.log('Post sent successfully')
          console.log(resp.data);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
};

export const createNewPlayerObject = async () => {
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


export const getPlayerObject = async () => {
  const user = getCurrentUser().uid

  try {
    const res = await axios.get(playerURL, {
      headers: {
        'uid': user
      }
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
}