import React, { useState, useEffect } from "react";
import "./EmailRegistration.css";
import { IoMdSend } from "react-icons/io";
import { handleSendData } from "./registration";
import { useNavigate } from "react-router-dom";
const EmailRegistration = () => {
    const [randomPassword, setRandomPassword] = useState("");
    useEffect(() => {
        const generateRandomPassword = () => {
            const chars =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
            const passwordLength = 12;
            let password = "";
            do {
                password = "";
                for (let i = 0; i < passwordLength; i++) {
                    password += chars.charAt(Math.floor(Math.random() * chars.length));
                }
            } while (!validatePassword(password));
            return password;
        };

        const validatePassword = (password) => {
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecialChar = /[!@#$%^&*]/.test(password);
            return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
        };

        const password = generateRandomPassword();
        setRandomPassword(password);
        setUser((prevUser) => ({ ...prevUser, password }));
        console.log("Generated password:", password);
    }, []);
    const [user, setUser] = useState({
        name: "",
        email: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
    });

    const getUserData = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });

        setErrors({
            name: validateName(value),
            email: validateEmail(value),
        });
    };

    const validateName = (name) => {
        if (!name.trim()) {
            return "Please enter your name.";
        }
        return "";
    };

    const validateEmail = (email) => {
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return "Please enter a valid email address.";
        }
        return "";
    };
    const navigate = useNavigate();
    function handleClickLogin() {
        navigate("/Login");
    }
    return (
        <div className="container">
            <h1 className="display-3 fw-bold access-text text-center">
                Access the Binary Funded Presale
            </h1>
            <p className="text-center fw-bold fs-4 text-secondary">
                Only for future experts, irreplaceable, high demand players
            </p>
            <div className="row pt-5 m-0">
                <div className="col-md-5 d-flex flex-column">
                    <label htmlFor="name" className="text-white fw-bold fs-4 ms-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name..."
                        value={user.name}
                        onChange={getUserData}
                        required
                    ></input>
                    {errors.name && <p className="text-danger error-md">{errors.name}</p>}
                </div>
                <div className="col-md-5 d-flex flex-column">
                    <label htmlFor="email" className="text-white fw-bold fs-4 ms-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email..."
                        value={user.email}
                        onChange={getUserData}
                        required
                    ></input>
                    {errors.email && (
                        <p className="text-danger error-md">{errors.email}</p>
                    )}
                </div>
                <div className="col-md-2 d-flex align-items-end justify-content-center justify-content-md-start">
                    <button
                        className="send-btn"
                        onClick={() =>
                            handleSendData(user.name, user.email, randomPassword)
                        }
                    >
                        Send <IoMdSend className="send-icon" />
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    {errors.name && <p className="text-danger error">{errors.name}</p>}
                </div>
                <div className="col-md-5 ">
                    {errors.email && <p className="text-danger error">{errors.email}</p>}
                </div>
            </div>
            <div>
                <p className="alreadyAcc-text mt-5 ms-md-3 d-flex justify-content-center justify-content-md-start">
                    Already have an account?
                    <span className="login-text" onClick={handleClickLogin}>
                        {" "}
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default EmailRegistration;
