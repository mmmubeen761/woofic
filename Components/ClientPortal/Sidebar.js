import React ,{useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';


export default function Sidebar(){
    const history = useHistory();
        return (
            <>
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="sidebar-item pt-2">
                                <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/dashboard"
                                    aria-expanded="false">
                                    <i className="far fa-clock" aria-hidden="true"></i>
                                    <span className="hide-menu">Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/updateprofile"
                                    aria-expanded="false">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <span className="hide-menu">Update Profile</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/addservice"
                                    aria-expanded="false">
                                    <i className="fa fa-table" aria-hidden="true"></i>
                                    <span className="hide-menu">Add Service</span>
                                    </Link>
                            </li>
                            <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/feedback"
                                    aria-expanded="false">
                                    <i className="fa fa-font" aria-hidden="true"></i>
                                    <span className="hide-menu">Feedback</span>
                                    </Link>
                            </li>
                            <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/chat"
                                    aria-expanded="false">
                                    <i className="fas fa-envelope" aria-hidden="true"></i>
                                    <span className="hide-envelope">Chat</span>
                                    </Link>
                            </li>
                            <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/blog"
                                    aria-expanded="false">
                                    <i className="fas fa-envelope" aria-hidden="true"></i>
                                    <span className="hide-envelope">Blog</span>
                                    </Link>
                            </li>
                            <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/todo"
                                    aria-expanded="false">
                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                    <span className="hide-envelope">Todo</span>
                                    </Link>
                            </li>
                            <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/help"
                                    aria-expanded="false">
                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                    <span className="hide-envelope">Help</span>
                                    </Link>
                            </li>
                            <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/complain"
                                    aria-expanded="false">
                                    <i className="fas fa-edit" aria-hidden="true"></i>
                                    <span className="hide-envelope">Complain</span>
                                    </Link>
                            </li>
                          
                            <li className="sidebar-item"  onClick={()=>{localStorage.removeItem('user_token'); history.push('/')}}>
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" 
                                    aria-expanded="false">
                                    <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
                                    <span className="hide-menu">Log Out</span>
                                    </Link>
                            </li>
                        </ul>
    
                    </nav>
                </div>
            </aside>
        </div>
    </>
        );
    }

