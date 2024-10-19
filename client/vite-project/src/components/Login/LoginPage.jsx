import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
const LoginPage = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '', general: '' });
    const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [hidePassword, setHidePassword] = useState(false);
    const navigate = useNavigate();

    const handleClickLogin = () => {
        try {
            signInWithEmailAndPassword(auth, user.email, user.password).then(setLogin(true)).catch((err) => console.log(err));
            if (login) {
                console.log(login)
                navigate("/home");
            }

        } catch (err) {
            console.error(err);
            setErrors({ ...errors, general: "Login failed. Please check your credentials and try again." });
        }
    }

    const handleClickSignup = () => {
        navigate('/SignUp')
    }
    function ShowPassword() {
        setShowPassword(false);
        setHidePassword(true);
    }
    function HidePassword() {
        setHidePassword(false);
        setShowPassword(true);
    }
    return (
        <div className='container login-container'>
            <form>
                <h1 className='login-text display-4 fw-bold'>Login</h1>
                <div className='w-100 text-center'>
                    <input type='text' className='input-login' placeholder='Enter your email...' value={user.email} onChange={event => setUser({ ...user, email: event.target.value })} />
                    {errors.email && <p className="text-danger error-md">{errors.email}</p>}
                </div>
                <div className='position-relative w-100 text-center'>
                    <input type={showPassword ? 'text' : 'password'} className='input-login' placeholder='Enter your password...' value={user.password} onChange={event => setUser({ ...user, password: event.target.value })} />
                    {showPassword ? <FaEye onClick={ShowPassword} className='eye-icon' /> : <FaEyeSlash onClick={HidePassword} className='eye-icon' />}
                    {errors.password && <p className="text-danger error-md">{errors.password}</p>}
                </div>
                <button type='button' className='Login-btn' onClick={() => handleClickLogin()} >Login</button>
                <div>
                    <p className='acc-text'>Don't have ann account? <span className='register-text' onClick={handleClickSignup}>SignUp</span></p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
