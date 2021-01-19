import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'

export default function Quotation() {
    return (
        <>
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <Nav />
                <Sidebar />
                <div className="page-wrapper">

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8 col-xlg-9 col-md-12 mx-auto">
                                <div class="card">
                                    <div class="card-body">
                                        <form class="form-horizontal form-material" style={{ textAlign: 'left' }}>
                                            <label class="col-md-12 p-0">Description</label>
                                            <div class="col-md-12 border-bottom p-0">
                                                <textarea rows="4" class="form-control p-0 border-0" placeholder="Add Description"></textarea>
                                            </div>
                                            <label class="col-md-12 p-0">Comments</label>
                                            <div class="col-md-12 border-bottom p-0">
                                                <textarea rows="4" class="form-control p-0 border-0" placeholder="Add Comments for Feedback"></textarea>
                                            </div>
                                            <label class="col-md-12 p-0">Price</label>
                                            <div class="col-md-12 border-bottom p-0">
                                                <input type="number" placeholder="Add Price"
                                                    class="form-control p-0 border-0" /> </div>
                                            <br />
                                            <div class="form-group mb-4">
                                                <div class="col-sm-12">
                                                    <button class="btn text-white" style={{ backgroundColor: '#76323f' }}>Send Quotation</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

