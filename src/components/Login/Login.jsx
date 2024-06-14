import "./Login.scss";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const { isSuccess, isError, msg } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isSuccess) {
            navigate("/profile"); 
        }
        dispatch(reset());
    }, [isSuccess, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('formData', formData);
        dispatch(login(formData));
    };
  return (
    <div className="container-login">
        <div className="border-login">
            <div className="login-box">
                <p>Login</p>
                <form onSubmit={onSubmit}>
                    <div className="user-box">
                        <input required type="email" name="email" value={email} onChange={onChange}/>
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input required type="password" name="password" value={password} onChange={onChange}/>
                        <label>Password</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account?  <Link to="/register" className="a2">Sign up!</Link></p>
            </div>
        </div>
    </div>
  )
}
export default Login
