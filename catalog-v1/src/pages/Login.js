import React, { useState } from 'react';
import './pagesCSS/Login.css';
import api from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import FailedLogin from '../components/componentsJS/LoginFail';
import useAuth from '../hooks/useAuth';

const LOGIN_URL = '/auth/login';
const USER_URL = '/piles';

const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(LOGIN_URL, JSON.stringify({
                email: user,
                password: password,
            }), {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response.data);
            const { accessToken, role } = response.data;
            setAuth({ email: user, accessToken, role });
            setUser("");
            setPassword("");
            navigate(USER_URL);
        } catch (e) {
            setLoginError(<FailedLogin />);
            console.error("Problem Logging in", e);
        }
    };

    return (
        <main>
            <div className="container">
                <div className="form-box">
                    <h1 id="title">Sign In</h1>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <div className="input-field">
                                <i className="fa-solid fa-envelope"></i>
                                <input
                                    type="text"
                                    name="user"
                                    placeholder="Username"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {loginError}
                        <div className="btn-field">
                            <button type="submit">Sign In</button>
                            <button type="button" onClick={() => navigate('/register')}>Go to Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
