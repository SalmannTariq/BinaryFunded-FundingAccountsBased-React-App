import React, { useState } from 'react'
import './SignUp.css'
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
    const [user, setUser] = useState({ email: '', password: '', name: '' });
    const [errors, setErrors] = useState({ email: '', password: '', name: '', general: '' });
    // const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateName = (name) => {
        return name.trim().length > 0;
    };

    const handleClickSignUp = () => {
        let valid = true;
        let newErrors = { email: '', password: '', name: '', general: '' };

        if (!validateName(user.name)) {
            newErrors.name = 'Name is required.';
            valid = false;
        }

        if (!validateEmail(user.email)) {
            newErrors.email = 'Invalid email address.';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            createUserWithEmailAndPassword(auth, user.email,user.name, user.password)
                .then(() => console.log("Name = ",user.name,"\nEmail = ",user.email,"\nPassword = ",user.password))
                .catch((err) => {
                    console.log(err);
                    setErrors({ ...errors, general: "Sign up failed. Please check your credentials and try again." });
                });

        }
    };

    const handleClickLogin = () => {
        navigate('/Login');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container login-container'>
            <form>
                <h1 className='signUp-text display-4 fw-bold'>Sign Up</h1>
                <div className='w-100 text-center'>
                    <input
                        type='text'
                        className='input-signup'
                        placeholder='Enter your name...'
                        value={user.name}
                        onChange={event => setUser({ ...user, name: event.target.value })}
                    />
                    {errors.name && <p className="text-danger error-md">{errors.name}</p>}
                </div>
                <div className='w-100 text-center'>
                    <input
                        type='text'
                        className='input-signup'
                        placeholder='Enter your email...'
                        value={user.email}
                        onChange={event => setUser({ ...user, email: event.target.value })}
                    />
                    {errors.email && <p className="text-danger error-md">{errors.email}</p>}
                </div>
                <div className='position-relative w-100 text-center'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='input-signup'
                        placeholder='Enter your password...'
                        value={user.password}
                        onChange={event => setUser({ ...user, password: event.target.value })}
                    />
                    {showPassword ? <FaEye onClick={togglePasswordVisibility} className='eye-icon' /> : <FaEyeSlash onClick={togglePasswordVisibility} className='eye-icon' />}
                    {errors.password && <p className="text-danger error-md">{errors.password}</p>}
                </div>

                {errors.general && <p className="text-danger error-md">{errors.general}</p>}

                <button type='button' className='Login-Btn' onClick={handleClickSignUp}>Signup</button>
                <div>
                    <p className='acc-text'>If already have an account? <span className='login-text' onClick={handleClickLogin}>Login</span></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
