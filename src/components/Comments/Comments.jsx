import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../features/comment/commentSlice';
import Comment from '../Comment/Comment';
import { useNavigate } from "react-router-dom";
import "./Comments.scss"
import { getPostById } from '../../features/posts/postsSlice';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const { id } = useParams();
	const { post } = useSelector((state) => state.posts);
	const [body, setBody] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate(); 

	const onSubmit = async (e) => {
		e.preventDefault();
		const comment = { body, PostId: post._id };
		await dispatch(createComment(comment));
        dispatch(getPostById(id));
		setBody('');
		setTimeout(() => {
			
			navigate("/post/" + post._id );
		}, 1000);
	};
	
	

	return (
		<div>
			<div className='comment-box'><Comment /></div>
			<form onSubmit={onSubmit}>
				<div>
					<label>Comment:</label>
					<input
						type="text"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>
				<button className="button-comment" type="submit">Create Comment</button>
			</form>
		</div>
	);
};

export default Comments;
