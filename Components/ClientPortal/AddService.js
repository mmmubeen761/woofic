import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import loginside from '../../Images/loginside.jpg'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'



export default function Login() {
    let history = useHistory();


    const [description, setDescription] = useState("");
    const [extracomments, setExtraComments] = useState("");
    const [deadline, setDeadLine] = useState("");
    const [name, setName] = useState("");
    const [sector, setSector] = useState("");
    const [time, setTime] = useState("");
    const [status, setStatus] = useState("");




    function SendService(e) {
        // console.log()
        e.preventDefault();
        const { data: response } = axios.post(`http://woofic-api.nastechltd.co/api/form`, {
            description: description,
            extra_comment: extracomments,
            deadline: deadline,
            client_name: name,
            client_sector: sector,
            status: status,
            client_id:'1'
        })
            .then((response) => {
                if (response) {
                    console.log(response)
                }
            }, (error) => {
                console.log(error);
                alert('Wrong email or password!')
            });
    }


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
                                            <textarea rows="4" class="form-control p-0 border-0" onChange={(e)=>setDescription(e.target.value)}  placeholder="Sevice Desription"></textarea>
                                        </div>
                                        <label class="col-md-12 p-0">Extra Comments</label>
                                        <div class="col-md-12 border-bottom p-0">
                                            <textarea rows="4" class="form-control p-0 border-0" onChange={(e)=>setExtraComments(e.target.value)}  placeholder="Extra Comments for Service"></textarea>
                                        </div>
                                            <div class="form-group mb-4">
                                                <label for="example-email" class="col-md-12 p-0">Dead Line</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="date" placeholder="johnathan@admin.com"
                                                        class="form-control p-0 border-0" onChange={(e)=>setDeadLine(e.target.value)} name="example-email"
                                                        id="example-email1" />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Your Name</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="text" placeholder="Your Name" 
                                                    class="form-control p-0 border-0" onChange={(e)=>setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Your Sector</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="text" placeholder="Your Sector"
                                                        class="form-control p-0 border-0" onChange={(e)=>setSector(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Time</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="time" placeholder="123 456 7890"
                                                        class="form-control p-0 border-0" onChange={(e)=>setTime(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Status</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="text" placeholder="Status"
                                                        class="form-control p-0 border-0" onChange={(e)=>setStatus(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <div class="col-sm-12">
                                                    <button class="btn text-white" style={{ backgroundColor:'#76323f'}} onClick={SendService}>Add Service</button>
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

