import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import Sidebar from '../AdminPortal/Sidebar'
import Nav from '../AdminPortal/Nav'

export default function ApproveReg() {
    let history = useHistory();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function LoginBtn(e) {
        e.preventDefault();
        const { data: response } = axios.post(`http://ecommerce-poc-api.nastechltd.co/api/login`, {
            email: email,
            password: password,
        })
            .then((response) => {
                if (response) {
                    localStorage.setItem('user_token', response.data);
                    history.push('/admindashboard');
                }
            }, (error) => {
                console.log(error);
                history.push('/');
                alert('Wrong email or password!')
            });
    }


    return (
        <>

            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full" style={{ backgroundColor: '#76323f' }}>
                <Nav />
                <Sidebar />
                <div className="page-wrapper">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12" style={{ textAlign: 'left' }}>
                                <div className="white-box">
                                    <h3 className="box-title mb-0">Approve Registrations</h3>
                                    <div className="comment-center">
                                        <div className="comment-body d-flex">
                                            <div className="user-img"> <img src="assets/plugins/images/users/pawandeep.jpg" alt="user"
                                                className="img-circle" />
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Pavan kumar<span><a href="mailto: abc@gmail.com"><i className="fa fa-envelope ml-3 text-primary"></i></a></span></h5><span className="time">10:20 AM 20 may 2016</span>
                                                <br />
                                                <div className="mb-3 mt-3">
                                                    <span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque
                                                    pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui
                                                    pellentesque molestie feugiat. Aenean commodo dui </span>
                                                </div>
                                                <a href="javacript:void(0)"
                                                    className="btn btn btn-rounded btn-default btn-outline mb-2 mb-md-0 m-r-5 border"><i
                                                        className="ti-check text-success m-r-5"></i>Approve</a><a
                                                            href="javacript:void(0)" className="btn-rounded btn btn-default btn-outline border ml-2"><i
                                                                className="ti-close text-danger m-r-5"></i>
                                                Reject
                                                </a>
                                            </div>
                                        </div>
                                        <div className="comment-body d-flex">
                                            <div className="user-img"> <img src="assets/plugins/images/users/sonu.jpg" alt="user"
                                                className="img-circle" />
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Sonu Nigam<span><a href="mailto: abc@gmail.com"><i className="fa fa-envelope ml-3 text-primary"></i></a></span></h5><span className="time">10:20 AM 20 may 2016</span>
                                                <br />
                                                <div className="mb-3 mt-3">
                                                    <span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque
                                                    pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui
                                                    pellentesque molestie feugiat. Aenean commodo dui </span>
                                                </div>
                                                <a href="javacript:void(0)"
                                                    className="btn btn btn-rounded btn-default btn-outline mb-2 mb-md-0 m-r-5 border"><i
                                                        className="ti-check text-success m-r-5"></i>Approve</a><a
                                                            href="javacript:void(0)" className="btn-rounded btn btn-default btn-outline border ml-2"><i
                                                                className="ti-close text-danger m-r-5"></i>
                                                Reject
                                                </a>
                                            </div>
                                        </div>
                                        <div className="comment-body d-flex border-0">
                                            <div className="user-img"> <img src="assets/plugins/images/users/arijit.jpg" alt="user"
                                                className="img-circle" />
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Arijit singh<span><a href="mailto: abc@gmail.com"><i className="fa fa-envelope ml-3 text-primary"></i></a></span></h5><span className="time">10:20 AM 20 may 2016</span>
                                                <br />
                                                <div className="mb-3 mt-3">
                                                    <span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque
                                                    pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui
                                                    pellentesque molestie feugiat. Aenean commodo dui </span>
                                                </div>
                                                <a href="javacript:void(0)"
                                                    className="btn btn btn-rounded btn-default btn-outline mb-2 mb-md-0 m-r-5 border"><i
                                                        className="ti-check text-success m-r-5"></i>Approve</a><a
                                                            href="javacript:void(0)" className="btn-rounded btn btn-default btn-outline border ml-2"><i
                                                                className="ti-close text-danger m-r-5"></i>
                                                Reject
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer text-center"> 2020 © Ample Admin brought to you by <a
                        href="https://www.wrappixel.com/">wrappixel.com</a>
                    </footer>
                </div>
            </div>
        </>
    );
}

