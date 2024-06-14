import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../features/posts/postsSlice';
import "./CreatePosts.scss"

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const postData = { title, body};
        console.log(postData);
        dispatch(createPost(postData));
        setTitle('');
        setBody('');
    };

    return (
        <div className="create-container">
            <form className="create" onSubmit={onSubmit}>
                <div className="create-group">
                    <label for="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="create-group">
                    <label for="image">Image Link</label>
                    <input
                        name="image"
                        type="text"
                        //value={image}
                        //onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="create-group">
                    <label for="body">Body</label>
                    <textarea
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <button class="form-submit-btn" type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;