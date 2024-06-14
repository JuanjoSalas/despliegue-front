import React, { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";
import Comment from "../Comment/Comment";
import Comments from "../Comments/Comments";
import "./PostDetail.scss";



const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPostById(id));
    }, [id]);

    return ( 
        <div className='container-postDetail'>
            <div className='border-postDetail'>
                <div className="postDetail">
                    <p className="detail-post">{post.title}</p>
                    <img className="postImage" src="https://images.stockcake.com/public/2/6/a/26a3fd95-08ee-4b93-b506-d6dfc85c0414_large/mountain-biking-adventure-stockcake.jpg" alt="" />
                    <p className="postBody">{post.body}</p>          
                <Comments/>
                </div>
            </div>
        </div>
 
    );
};

export default PostDetail;