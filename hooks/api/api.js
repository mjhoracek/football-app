import axios from 'axios';
import { getToken } from '../../firebase/getToken';
import { createToken } from "./createToken";

const API = axios.create({ playerURL: 'http://localhost:5000/players' });

API.interceptors.request.use((req) => {
    const token = getToken()
    req.headers.Authorization = `Bearer ${token}`;
    req.headers.userID = 'Some random ID'

  return req;
});


export const updatePost = (id, updatedPost) => API.patch( playerURL, updatedPost);
export const getPlayer = () => API.get() 

export const random = () => API.get()
