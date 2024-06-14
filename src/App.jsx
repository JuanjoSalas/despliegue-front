import { React, useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import Home from "./components/Home/Home";
import './App.scss';
import Search from './components/Search/Search';
import UserDetail from './components/UserDetail/UserDetail';
import Profile from './components/Profile/Profile';
import PrivateZone from './guards/PrivateZone';
import NotFound from './components/NotFound/NotFound';
import PostDetail from "./components/PostDetail/PostDetail";
import Comments from './components/Comments/Comments';
import CreatePost from './components/CreatePost/CreatePosts';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PrivateZone><Home /></PrivateZone>} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:username" element={<PrivateZone><Search /></PrivateZone>} />
          <Route path="/userdetail/:id" element={<PrivateZone><UserDetail /></PrivateZone>} />
          <Route path="/profile" element={<PrivateZone><Profile/></PrivateZone>} />
          <Route path="/post/:id" element={<PrivateZone><PostDetail/></PrivateZone>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/comments" element = {<PrivateZone><Comments/></PrivateZone>}/>
          <Route path="/createpost" element = {<PrivateZone><CreatePost/></PrivateZone>}/>
        </Routes>
        <NavBar/>
      </BrowserRouter>
    </>
  )
}

export default App
