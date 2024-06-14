import axios from "axios";

const API_URL = "http://localhost:3001/posts";

 const getPosts = async ()=>{
   const token = localStorage.getItem("token")
    const res = await axios.get(API_URL,{
      headers:{
         Authorization:token
      }
    });
    console.log(res.data);
    return res.data;
 };

 const getPostById = async (_id) => {
    const token = localStorage.getItem("token")
    const res = await axios.get(API_URL + "/id/" + _id,{
      headers:{
         Authorization:token
      }
   });
    console.log(res.data);
    return res.data;
 };

 const createPost = async (postData) => {
   const token = localStorage.getItem("token");
   const res = await axios.post(API_URL, postData, {
       headers: {
           Authorization: token,
       }
   });
   console.log(res.data);
   return res.data;
};

const like = async (_id) => {
  const token = (localStorage.getItem("token"));
  if (!token) {
    throw new Error("No token found");
  }
  const res = await axios.put(API_URL + "/like/"+_id,{}, {
      headers: {
        authorization: token,
      },
    } );
  return res.data;
};

const dislike = async (_id) => {
  const token = (localStorage.getItem("token"));
  if (!token) {
    throw new Error("No token found");
  }
  const res = await axios.put(API_URL + "/dislike/"+_id,{}, {
      headers: {
        authorization: token,
      },
    } );
  return res.data;
};

const deletePost = async (_id) => {
  const token = (localStorage.getItem("token"));
  if (!token) {
    throw new Error("No token found");
  }
  const res = await axios.delete(API_URL + "/id/"+_id,{
      headers: {
        authorization: token,
      },
    } );
  return res.data;
};




const postsService = {
    getPosts,
    getPostById,
    createPost,
    like,
    dislike,
    deletePost,
};

export default postsService;