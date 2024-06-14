import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getAllComments } from '../../features/comment/commentSlice';
import { getPostById, getPosts } from '../../features/posts/postsSlice';
import { useParams } from 'react-router-dom';

const Comment = () => {
    const { id } = useParams();
  const { post } = useSelector(state => state.posts); 
  const dispatch = useDispatch();
  if (post.CommentIds && post.CommentIds.length === 0 ) {
    return <div>No comments yet</div>; 
  }
  return (
    <div>
      {post.CommentIds && post.CommentIds.map(comment => ( 
        <div key={comment._id}>
          <p>{comment.body}</p>
          <button  onClick={async()=> {
            await dispatch(deleteComment(comment._id))
        dispatch( getPostById(id))}}>Eliminar</button>
        </div>
        
      ))}
      
    </div>
  );
};

export default Comment;
