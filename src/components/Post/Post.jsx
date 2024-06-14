import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.scss"
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import CreatePost from "../CreatePost/CreatePosts";
import { deletePost, dislike, getPosts, like } from "../../features/posts/postsSlice";

const Post = () => {
    const { posts } = useSelector((state) => state.posts);
    const {user} = useSelector ((state)=> state.auth); 
    const dispatch = useDispatch();
    const post = posts?.map((post) => {
        const isAlreadyLiked = post.LikeIds?.includes(user._id);
        return (
            <div className='container-post'>
                <div className='border-post'>
                    <div className="post" key={post._id}>
                        <Link className="link" to={"/post/" + post._id}>                    
                            <p className="detail-post">{post.title}</p>
                            <img className="image" src="https://images.stockcake.com/public/2/6/a/26a3fd95-08ee-4b93-b506-d6dfc85c0414_large/mountain-biking-adventure-stockcake.jpg" alt="" />
                            <p className="body">{post.body}</p>
                        </Link>
                        <span className="wish">{post.likes?.length}</span>
                        {isAlreadyLiked ? (
                            <HeartFilled  onClick={async()=>  {
                            await dispatch(dislike(post._id))
                            dispatch(getPosts())
                            } 
                            } />
                        ) : (
                        <HeartOutlined onClick={async()=> {
                        await dispatch(like(post._id))
                        dispatch(getPosts()) 
                        }
                        } />
                        )}
                    <button className="remove" onClick={async()=> {
                    await dispatch(deletePost(post._id))
                    dispatch(getPosts())}}>Eliminar</button>
                </div>
            </div>
        </div>
               
        );
    });
    return <div>{post}</div>;
};

    
export default Post