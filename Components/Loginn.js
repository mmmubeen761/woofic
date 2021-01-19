import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import loginside from '../Images/service.png'
import axios from 'axios';
import './LoginSignup.css'

export default function LoginSignup() {
    let history = useHistory();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function LoginBtn(e) {
        e.preventDefault();
        const { data: response } = axios.post(`http://woofic-api.nastechltd.co/api/login`, {
            email: email,
            password: password,
        })
            .then((response) => {
                localStorage.setItem('user_token', response.data);
                history.push('/dashboard');
                // console.log(response)
            }, (error) => {
                console.log(error);
                history.push('/');
                alert('Wrong email or password!')
            });
    }


    return (
        <>
            <div class="form">

            <ul class="tab-group">
                    <li class="tab active"><Link to="signupp">Sign Up</Link></li>
                    <li class="tab"><Link to="loginn">Log In</Link></li>
                </ul>

                <div class="tab-content">
                    <div id="signup">
                        <h1>Sign Up for Free</h1>

                        <form >

                            <div class="top-row">
                                <div class="field-wrap">
                                    <label>
                                        First Name<span class="req">*</span>
                                    </label>
                                    <input type="text" required autocomplete="off" />
                                </div>

                                <div class="field-wrap">
                                    <label>
                                        Last Name<span class="req">*</span>
                                    </label>
                                    <input type="text" required autocomplete="off" />
                                </div>
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Email Address<span class="req">*</span>
                                </label>
                                <input type="email" required autocomplete="off" />
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Set A Password<span class="req">*</span>
                                </label>
                                <input type="password" required autocomplete="off" />
                            </div>

                            <button type="submit" class="button button-block" >Get Started</button>

                        </form>

                    </div>

                    <div id="login">
                        <h1>Welcome Back!</h1>

                        <form>

                            <div class="field-wrap">
                                <label>
                                    Email Address<span class="req">*</span>
                                </label>
                                <input type="email" required autocomplete="off" />
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Password<span class="req">*</span>
                                </label>
                                <input type="password" required autocomplete="off" />
                            </div>

                            <p class="forgot"><a href="#">Forgot Password?</a></p>

                            <button class="button button-block">Log In</button>

                        </form>

                    </div>

                </div>

            </div>
        </>
    );
}
