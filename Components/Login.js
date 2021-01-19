import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import loginside from '../Images/service.png'
import axios from 'axios';


export default function Login() {
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
            <div className="container-fluid px-5 mt-lg-5 mt-md-2 mt-sm-1 mx-auto w-100 " >
                <div className="card card0 border" s>
                    <div className="row d-flex ">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row px-3 my-5 justify-content-center border-line"> <img src={loginside} className="image" /> </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ">

                            <div className=" px-4 py-5">


                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Email Address</h6>
                                </label> <input className="mb-4" onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="Enter a valid email address" /> </div>
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Password</h6>
                                </label> <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter password" /> </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                </div>
                                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={LoginBtn}>Login</button> </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div> <small className="or text-center">Or</small>
                                    <div className="line"></div>
                                </div>
                                <div className="row mb-4 pl-1 mx-auto">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div className="facebook text-center mr-3">
                                        <div className="fa fa-facebook"></div>
                                    </div>
                                    <div className="twitter text-center mr-3">
                                        <div className="fa fa-twitter"></div>
                                    </div>
                                    <div className="linkedin text-center mr-3">
                                        <div className="fa fa-linkedin"></div>
                                    </div>
                                </div>
                                <div className="row mb-4 pl-3 pr-auto"> <small className="font-weight-bold">Don't have an account? <Link className="text-danger" to="/client">Register</Link></small> </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

