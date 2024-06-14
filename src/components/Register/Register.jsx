import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../features/auth/authSlice'
import { notification } from "antd";
import "./Register.scss"
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [formData , setFormData] = useState({
        username:"",
        email:"",
        birthday:"",
        firstname:"",
        lastname:"",
        password:"",
        password2:""
    })
    const {username,email,password,birthday,firstname,lastname,password2} = formData
    const { isSuccess, msg, isError } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
          notification.success({
            message: "Success",
            description: msg,
          });
        }
        if (isError) {
          notification.error({
            message: "Error!!!",
            description: msg,
          });
        }
        dispatch(reset())
      }, [isSuccess, msg, isError]);

    const dispatch = useDispatch()

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const today = new Date();
        const birthDate = new Date(birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }

      if (age < 18) {
          notification.error({
              message: "Error!!!",
              description: "You must be 18 years or older to register.",
          });
          return;
      }
        dispatch(register(formData))
        setTimeout(()=>{
          navigate("/login");
        },1000);

    }    

   return (
    <div className="form-card1">
      <div className="form-card2">
        <form className="form" onSubmit={onSubmit}>
          <p className="form-heading">Register</p>
          <div className="form-field">
            <input
              className="input-field"
              required
              type="text"
              name="firstname"
              value={firstname}
              onChange={onChange}
              placeholder="Insert your name"
            />
          </div>
          <div className="form-field">
            <input
              className="input-field"
              required
              type="text"
              name="lastname"
              value={lastname}
              onChange={onChange}
              placeholder="Insert your lastname"
            />
          </div>
          <div className="form-field">
            <input
              className="input-field"
              required
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Insert your username"
            />
          </div>
          <div className="form-field">
            <input
              className="input-field"
              required
              type="date"
              name="birthday"
              value={birthday}
              onChange={onChange}
              placeholder="Insert your birthday"
            />
          </div>
          <div className="form-field">
            <input
              className="input-field"
              required
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Insert your email"
            />
          </div>
          <div className="form-field">
            <input
              className="input-field"
              required
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Insert your password"
            />
          </div>
          <div className="form-field">
            <input
              className="input-field"
              required
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Insert your password"
            />
          </div>  
          <button className="sendMessage-btn" type="submit">Register</button> 
        </form>
      </div>
    </div>
  )
}


export default Register