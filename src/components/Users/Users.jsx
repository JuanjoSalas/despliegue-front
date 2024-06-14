import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserByUserName } from '../../features/auth/authSlice';
import User from '../User/User';

const Users = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUserByUserName())
    },[])
  return (
    <div>
        <h1>Users</h1>
        <User/>

    </div>
  )
}

export default Users