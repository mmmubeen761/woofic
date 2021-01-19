import React ,{useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';


export default function Sidebar(){
        return (
            <>
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/supplierdashboard"
                                    aria-expanded="false">
                                    <i className="fa fa-globe" aria-hidden="true"></i>
                                    <span className="hide-menu">Supplier Dashboard</span>
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
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/quotation"
                                    aria-expanded="false">
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    <span className="hide-menu">Quotation</span>
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

