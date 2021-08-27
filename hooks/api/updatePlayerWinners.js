import { createToken } from "./createToken";
import axios from 'axios'

export const updatePlayerWinners = async (winners) => {
    const playerURL = 'http://localhost:5000/players';
    const header = await createToken();

    try {
      const res = await axios.patch(playerURL, header)
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }


//part 6 code
//////////////////////////////////////////////////////////////////////////////////////////////
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
  
// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// //server controller

// export const updatePost = async (req, res) => {
//   const { id } = req.params;
//   const { title, message, creator, selectedFile, tags } = req.body;
  
//   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//   const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//   await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//   res.json(updatedPost);
// }