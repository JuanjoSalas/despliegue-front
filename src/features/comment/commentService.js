import axios from 'axios';

const API_URL = 'http://localhost:3001/comments';

const getAllComments = async () => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL + '/',{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};

const createComment = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.post(API_URL , postData,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};

const deleteComment = async (_id) => {
	const token = localStorage.getItem('token');
	const res = await axios.delete(API_URL + /id/ + _id,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};


const postService = {
    createComment,
    getAllComments,
	deleteComment,


};

export default postService;