import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
    user: user,
    users:[],
    token: token,
    isSuccess: false,
    isError: false,
    msg: "",
};

export const register = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
      try {
        return await authService.register(user);
      } catch (error) {
        console.error(error);
        const msgError = error.response.data.messages[0]
        return thunkAPI.rejectWithValue(msgError); 
      }
    }
  );

  export const login = createAsyncThunk("auth/login", async (user,thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      console.error(error);
      const msgError = error.response.data.message
      return thunkAPI.rejectWithValue(msgError)
    }
  });

  export const logout = createAsyncThunk("auth/logout", async () => {
    try {
      return await authService.logout();
    } catch (error) {
      console.error(error);
    }
  });

  export const getUserByUserName = createAsyncThunk("users/getUserByUserName", async (username)=>{
    try {
        return await authService.getUserByUserName(username)
    } catch (error) {
        console.log(error);
        
    }
  });

  export const getUserById = createAsyncThunk("users/getUserById", async (id)=>{
    try {
        return await authService.getUserById(id)
    } catch (error) {
        console.log(error);
        
    }
  })
  export const getUserInfo = createAsyncThunk("users/getUserInfo", async (id) => {
      try {
        return await authService.getUserInfo(id);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) =>{
            state.isSuccess = false;
            state.isError = false; 
            state.msg = "";
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(register.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.message = action.payload.msg;
          })
        .addCase(register.rejected, (state, action) => {
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
          })
        .addCase(getUserByUserName.fulfilled,(state,action)=>{
            state.users = action.payload

        })
        .addCase(login.fulfilled, (state, action) => {
          state.isSuccess = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(getUserById.fulfilled,(state,action)=>{
            state.user = action.payload.user
        })
        .addCase(login.rejected, (state, action) => {
          state.isError = true;
          state.message = action.payload;
        })  
        .addCase(getUserInfo.fulfilled,(state, action)=>{
            state.user = action.payload.user
        })
        .addCase(logout.fulfilled, (state) => {
          state.user = null;
          state.token = "";
          state.isSuccess = true;

        })
    } 

});

export default authSlice.reducer;
export const { reset } = authSlice.actions;