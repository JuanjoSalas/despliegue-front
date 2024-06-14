import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById, getUserByUserName } from '../../features/auth/authSlice';
import wallpaper from "../../assets/img/wallpaper.png"

const UserDetail = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByUserName(id));
  }, [id]);

  if (!user) return <p>cargando...</p>;


  return (
    <div className='container-card'>
      <div className='border-card'>
        <div className="card">
          <div className="card__img"><img className="wallpaper" src= {wallpaper}/></div>
          <div className="card__avatar"><img className="img__avatar" src="https://bit.ly/dan-abramov" alt="" /></div>
          <div className="card__title">{user.firstname} {user.lastname}</div>
          <div className="card__subtitle">{user.username}</div>
        </div>
      </div> 
    </div>
  );
};

export default UserDetail;
