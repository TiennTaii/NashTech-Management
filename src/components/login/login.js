import './login.scss';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useAuthContext } from '../../context/authContext';

const Login = () => {
    const [isUserNameError, setIsUserNameError] = useState('');
    const [isPasswordError, setIsPasswordError] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { setIsAuthenticated } = useAuthContext();

    const handleLogin = () => {
        //call api login
        userName === '' ? setIsUserNameError('not be empty!') : setIsUserNameError('');
        password === '' ? setIsPasswordError('not be empty!') : setIsPasswordError('');
        if (userName === 'admin' && password === '123456') {
            setIsAuthenticated(true);
            navigate('/');
        }
    };

    return (
        <section className="screen">
            <div className="body">
                <form className="form">
                    <img src={logo} alt="" className="logo"></img>

                    <div className="form_item">
                        <label>User name:</label>
                        <input
                            className={`${isUserNameError ? 'input-error' : ''}`}
                            type="text"
                            placeholder="Enter username"
                            value={userName}
                            onChange={(e) => {
                                e.target.value === '' ? setIsUserNameError('not be empty!') : setIsUserNameError('');
                                setUserName(e.target.value);
                            }}
                            onBlur={(e) => {
                                e.target.value === '' ? setIsUserNameError('not be empty!') : setIsUserNameError('');
                            }}
                            onFocus={() => {
                                setIsUserNameError('');
                            }}
                        />
                        {isUserNameError && <label className="form_item_error">{isUserNameError}</label>}
                    </div>
                    <div className="form_item">
                        <label>Password: </label>
                        <input
                            type="password"
                            id="input-bar"
                            className={`${isPasswordError ? 'input-error' : ''}`}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => {
                                e.target.value === '' ? setIsPasswordError('not be empty!') : setIsPasswordError('');

                                setPassword(e.target.value);
                            }}
                            onBlur={(e) => {
                                e.target.value === '' ? setIsPasswordError('not be empty!') : setIsPasswordError('');
                            }}
                            onFocus={() => {
                                setIsPasswordError('');
                            }}
                        />
                        {isPasswordError && <label className="form_item_error">{isPasswordError}</label>}
                    </div>

                    <Button variant="danger" onClick={handleLogin}>
                        Login
                    </Button>

                    <a className="sign-up" href="/">
                        Sign Up
                    </a>
                </form>
            </div>
        </section>
    );
};

export default Login;
