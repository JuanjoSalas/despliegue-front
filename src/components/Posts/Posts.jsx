import React, { useEffect } from "react"
import Post from "../Post/Post"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, reset } from "../../features/posts/postsSlice"
import { Link, useNavigate } from "react-router-dom";
import "./Posts.scss"



const Posts = () => {
    const { isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    if (isLoading) {
        return (
            <div className="container-loader">
                <div className="loader">
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                </div>
            </div>
        )
    }
    return (
        <div className="container-newpost">
            <button className="btn-newpost "><Link to="/createpost" className="newpost">New Post</Link></button>
            <Post/>
        </div>
    )
}

export default Posts