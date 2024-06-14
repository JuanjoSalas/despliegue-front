import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";
import Post from "../../components/Post/Post";

const initialState = {
    posts:[],
    isLoading: false,
    post:{},
    comments: [],

};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    try {
        return await postsService.getPosts();
    } catch (error) {
        console.error(error);
    }
});

export const getPostById = createAsyncThunk("posts/getPostById", async (_id) => {
    try {
        return await postsService.getPostById(_id);
    } catch (error) {;
        console.error(error);
        }
    })

export const getPostsByUserId = createAsyncThunk("posts/getPostsByUserId", async (_id) => {
    try {
        return await postsService.getPostsByUserId(_id);
    } catch (error) {
        console.error(error);
    }            
});

export const createPost = createAsyncThunk("posts/createPost", async (postData) => {
    try {
        return await postsService.createPost(postData);
    } catch (error) {
        console.error(error);
    }
});

export const like = createAsyncThunk("posts/like", async (_id) => {
    try {
      return await postsService.like(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const dislike = createAsyncThunk("posts/dislike", async (_id) => {
    try {
      return await postsService.dislike(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const deletePost = createAsyncThunk("posts/delete", async (_id) => {
    try {
      return await postsService.deletePost(_id);
    } catch (error) {
      console.error(error);
    }
  });

  


export const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload.posts;
            state.isLoading =  false;
        });
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.post = action.payload.post;
        });
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.posts.push(action.payload.post);
            state.isLoading = false;
        })
        builder.addCase(like.fulfilled, (state, action) => {
            const posts = state.posts.map((post) => {
              if (post._id === action.payload._id) {
                post = action.payload;
              }
              return post
          })
          state.posts = posts
        });
        builder.addCase(dislike.fulfilled, (state, action) => {
            const posts = state.posts.map((post) => {
              if (post._id === action.payload._id) {
                post = action.payload;
              }
              return post
          })
          state.posts = posts
        });
        builder.addCase(deletePost.fulfilled, (state, action) => {
            const posts = state.posts.map((post) => {
                if (post._id === action.payload._id) {
                  post = action.payload;
                }
                return post
            })
            state.posts = posts
          });
      },
    });

  

export const { reset } = PostsSlice.actions;
export default PostsSlice.reducer;