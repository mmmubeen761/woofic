import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import Sidebar from '../AdminPortal/Sidebar'
import Nav from '../AdminPortal/Nav';
import jwt_decode from 'jwt-decode'

export default function UpdateProfile() {


    const history = useHistory();

    var token = localStorage.getItem("user_token");
    var decoded = jwt_decode(token)

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [sector, setSector] = useState("");
    const [location, setLocation] = useState("");
    const [contact_number, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    function LoginBtn(e) {
        e.preventDefault();
        if (password !== cpassword) {
            alert("Password incorrect!");
        } else if (
            firstname === "" ||
            lastname === "" ||
            email === "" ||
            sector === "" ||
            contact_number === "" ||
            location === "" ||
            password === "" ||
            cpassword === ""
        ) {
            alert("Please fill all input feilds!");
        } else {

            const { data: response } = axios.put(
                `http://woofic-api.nastechltd.co/api/provider/${decoded.sub}`,
                {
                    first_name: firstname,
                    last_name: lastname,
                    email: email,
                    sector: sector,
                    location: location,
                    contact_number: contact_number,
                    password: password,
                    profile_image: 'null'
                }).then((response) => {
                    console.log(response);
                    history.push("/admindashboard");
                }, (Error) => {
                    alert(Error)
                });
        }
    }

const [data,setData] = useState('');

    useEffect(()=>{
        function getData(){
            const res = axios.get(`http://woofic-api.nastechltd.co/api/users/${decoded.sub}`)
            .then((res)=>{
                console.log(res.data)
                setData(res.data)
            }
            )
                
        }
        getData()
    },[])

    return (
        <>
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <Nav />
                <Sidebar />
                <div className="page-wrapper">

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-4 col-xlg-3 col-md-12">
                                <div class="white-box">
                                    <div class="user-bg"> <img width="100%" alt="user" src="assets/plugins/images/large/img1.jpg" />
                                    </div>
                                    <br />
                                    <input type="file" />
                                    <div class="user-btm-box mt-5 d-md-flex">
                                        <div class="col-md-4 col-sm-4 text-center">
                                            <h3>{data.first_name}&nbsp;{data.last_name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8 col-xlg-9 col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <form class="form-horizontal form-material" style={{ textAlign: 'left' }}>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">First Name</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="text" defaultValue={data.first_name}
                                                        class="form-control p-0 border-0" onChange={(e) => setFirstname(e.target.value)} /> </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Last Name</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="text" defaultValue={data.last_name}
                                                        class="form-control p-0 border-0" onChange={(e) => setLastname(e.target.value)} /> </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label for="example-email" class="col-md-12 p-0">Email</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="email" defaultValue={data.email}
                                                        class="form-control p-0 border-0" name="example-email"
                                                        id="example-email1" onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Phone No</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="text" defaultValue={data.contact_number}
                                                        class="form-control p-0 border-0" onChange={(e) => setContact(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Sector</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="text" defaultValue={data.sector}
                                                        class="form-control p-0 border-0" onChange={(e) => setSector(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Location</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="text" defaultValue={data.location}
                                                        class="form-control p-0 border-0" onChange={(e) => setLocation(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Password</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="password" placeholder='***********' class="form-control p-0 border-0" onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label class="col-md-12 p-0">Confirm Password</label>
                                                <div class="col-md-12 border-bottom p-0">
                                                    <input type="password" placeholder='***********' class="form-control p-0 border-0" onChange={(e) => setCpassword(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="form-group mb-4">
                                                <div class="col-sm-12">
                                                    <button class="btn text-white" style={{ backgroundColor: '#76323f' }} onClick={LoginBtn}>Update Profile</button>
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

