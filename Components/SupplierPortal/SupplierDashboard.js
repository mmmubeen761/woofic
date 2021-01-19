import React ,{useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'

export default function SupplierDashboard(){
    let history = useHistory();


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function LoginBtn(e){
        e.preventDefault();
        const {data:response} =  axios.post(`http://ecommerce-poc-api.nastechltd.co/api/login`,{
            email:email,
            password:password,
        })
        .then((response) => {
            if(response){
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
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full" style={{backgroundColor:'#76323f'}}>
            <Nav />
            <Sidebar />
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title text-uppercase font-medium font-14">Dashboard</h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ml-auto">
                                    <li><a href="#">Dashboard</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-xs-12">
                            <div className="white-box analytics-info">
                                <h3 className="box-title">Total Visit</h3>
                                <ul className="list-inline two-part d-flex align-items-center mb-0">
                                    <li>
                                        <div id="sparklinedash"><canvas width="67" height="30"
                                                style={{display:' inline-block', width: '67px', height: '30px', verticalAlign: 'top'}}></canvas>
                                        </div>
                                    </li>
                                    <li className="ml-auto"><span className="counter text-success">659</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-xs-12">
                            <div className="white-box analytics-info">
                                <h3 className="box-title">Total Page Views</h3>
                                <ul className="list-inline two-part d-flex align-items-center mb-0">
                                    <li>
                                        <div id="sparklinedash2"><canvas width="67" height="30"
                                                style={{display: 'inline-block', width: '67px', height: '30px', verticalAlign: 'top'}}></canvas>
                                        </div>
                                    </li>
                                    <li className="ml-auto"><span className="counter text-purple">869</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-xs-12">
                            <div className="white-box analytics-info">
                                <h3 className="box-title">Unique Visitor</h3>
                                <ul className="list-inline two-part d-flex align-items-center mb-0">
                                    <li>
                                        <div id="sparklinedash3"><canvas width="67" height="30"
                                                style={{display: 'inline-block', width: '67px', height: '30px', verticalAlign: 'top'}}></canvas>
                                        </div>
                                    </li>
                                    <li className="ml-auto"><span className="counter text-info">911</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="white-box">
                                <h3 className="box-title">Products Yearly Sales</h3>
                                <div className="d-md-flex">
                                    <ul className="list-inline d-flex ml-auto">
                                        <li className="pl-3">
                                            <h5><i className="fa fa-circle m-r-5 text-info"></i>Mac</h5>
                                        </li>
                                        <li className="pl-3">
                                            <h5><i className="fa fa-circle m-r-5 text-inverse"></i>Windows</h5>
                                        </li>
                                    </ul>
                                </div>
                                <div id="ct-visits" style={{height: '405px'}}>
                                    <div className="chartist-tooltip" style={{top: '-17px', left: '-12px'}}><span
                                            className="chartist-tooltip-value">6</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <div className="white-box">
                                <div className="d-md-flex mb-3">
                                    <h3 className="box-title mb-0">Recent sales</h3>
                                    <div className="col-md-3 col-sm-4 col-xs-6 ml-auto">
                                        <select className="form-control row border-top">
                                            <option>March 2017</option>
                                            <option>April 2017</option>
                                            <option>May 2017</option>
                                            <option>June 2017</option>
                                            <option>July 2017</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table no-wrap">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">#</th>
                                                <th className="border-top-0">NAME</th>
                                                <th className="border-top-0">STATUS</th>
                                                <th className="border-top-0">DATE</th>
                                                <th className="border-top-0">PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="txt-oflo">Elite admin</td>
                                                <td>SALE</td>
                                                <td className="txt-oflo">April 18, 2017</td>
                                                <td><span className="text-success">$24</span></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td className="txt-oflo">Real Homes WP Theme</td>
                                                <td>EXTENDED</td>
                                                <td className="txt-oflo">April 19, 2017</td>
                                                <td><span className="text-info">$1250</span></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="txt-oflo">Ample Admin</td>
                                                <td>EXTENDED</td>
                                                <td className="txt-oflo">April 19, 2017</td>
                                                <td><span className="text-info">$1250</span></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="txt-oflo">Medical Pro WP Theme</td>
                                                <td>TAX</td>
                                                <td className="txt-oflo">April 20, 2017</td>
                                                <td><span className="text-danger">-$24</span></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td className="txt-oflo">Hosting press html</td>
                                                <td>SALE</td>
                                                <td className="txt-oflo">April 21, 2017</td>
                                                <td><span className="text-success">$24</span></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td className="txt-oflo">Digital Agency PSD</td>
                                                <td>SALE</td>
                                                <td className="txt-oflo">April 23, 2017</td>
                                                <td><span className="text-danger">-$14</span></td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td className="txt-oflo">Helping Hands WP Theme</td>
                                                <td>MEMBER</td>
                                                <td className="txt-oflo">April 22, 2017</td>
                                                <td><span className="text-success">$64</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 col-sm-12">
                            <div className="white-box">
                                <h3 className="box-title mb-0">Recent Comments</h3>
                                <div className="comment-center">
                                    <div className="comment-body d-flex">
                                        <div className="user-img"> <img src="plugins/images/users/pawandeep.jpg" alt="user"
                                                className="img-circle" />
                                        </div>
                                        <div className="mail-contnet">
                                            <h5>Pavan kumar</h5><span className="time">10:20 AM 20 may 2016</span>
                                            <br />
                                            <div className="mb-3 mt-3">
                                                <span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque
                                                    pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui
                                                    pellentesque molestie feugiat. Aenean commodo dui </span>
                                            </div>
                                            <a href="javacript:void(0)"
                                                className="btn btn btn-rounded btn-default btn-outline mb-2 mb-md-0 m-r-5"><i
                                                    className="ti-check text-success m-r-5"></i>Approve</a><a
                                                href="javacript:void(0)" className="btn-rounded btn btn-default btn-outline"><i
                                                    className="ti-close text-danger m-r-5"></i>
                                                Reject</a>
                                        </div>
                                    </div>
                                    <div className="comment-body d-flex">
                                        <div className="user-img"> <img src="plugins/images/users/sonu.jpg" alt="user"
                                                className="img-circle" />
                                        </div>
                                        <div className="mail-contnet">
                                            <h5>Sonu Nigam</h5><span className="time">10:20 AM 20 may 2016</span>
                                            <br />
                                            <div className="mb-3 mt-3">
                                                <span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque
                                                    pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui
                                                    pellentesque molestie feugiat. Aenean commodo dui </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-body d-flex border-0">
                                        <div className="user-img"> <img src="plugins/images/users/arijit.jpg" alt="user"
                                                className="img-circle" />
                                        </div>
                                        <div className="mail-contnet">
                                            <h5>Arijit singh</h5><span className="time">10:20 AM 20 may 2016</span>
                                            <br />
                                            <div className="mb-3 mt-3">
                                                <span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque
                                                    pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui
                                                    pellentesque molestie feugiat. Aenean commodo dui </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-heading">
                                    CHAT LISTING
                                </div>
                                <div className="card-body">
                                    <ul className="chatonline">
                                        <li>
                                            <div className="call-chat">
                                                <button className="btn btn-success text-white btn-circle btn" type="button">
                                                    <i className="fas fa-phone"></i>
                                                </button>
                                                <button className="btn btn-info btn-circle btn" type="button">
                                                    <i className="far fa-comments"></i>
                                                </button>
                                            </div>
                                            <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                    src="plugins/images/users/varun.jpg" alt="user-img" className="img-circle" />
                                                <div className="ml-2">
                                                    <span className="text-dark text-muted">Varun Dhavan <small
                                                            className="d-block text-success d-block">online</small></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="call-chat">
                                                <button className="btn btn-success text-white btn-circle btn" type="button">
                                                    <i className="fas fa-phone"></i>
                                                </button>
                                                <button className="btn btn-info btn-circle btn" type="button">
                                                    <i className="far fa-comments"></i>
                                                </button>
                                            </div>
                                            <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                    src="plugins/images/users/genu.jpg" alt="user-img" className="img-circle" />
                                                <div className="ml-2">
                                                    <span className="text-dark text-muted">Genelia
                                                        Deshmukh <small className="d-block text-warning">Away</small></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="call-chat">
                                                <button className="btn btn-success text-white btn-circle btn" type="button">
                                                    <i className="fas fa-phone"></i>
                                                </button>
                                                <button className="btn btn-info btn-circle btn" type="button">
                                                    <i className="far fa-comments"></i>
                                                </button>
                                            </div>
                                            <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                    src="plugins/images/users/ritesh.jpg" alt="user-img" className="img-circle" />
                                                <div className="ml-2">
                                                    <span className="text-dark text-muted">Ritesh
                                                        Deshmukh <small className="d-block text-danger">Busy</small></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="call-chat">
                                                <button className="btn btn-success text-white btn-circle btn" type="button">
                                                    <i className="fas fa-phone"></i>
                                                </button>
                                                <button className="btn btn-info btn-circle btn" type="button">
                                                    <i className="far fa-comments"></i>
                                                </button>
                                            </div>
                                            <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                    src="plugins/images/users/arijit.jpg" alt="user-img" className="img-circle" />
                                                <div className="ml-2">
                                                    <span className="text-dark text-muted">Arijit
                                                        Sinh <small className="d-block text-muted">Offline</small></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="call-chat">
                                                <button className="btn btn-success text-white btn-circle btn" type="button">
                                                    <i className="fas fa-phone"></i>
                                                </button>
                                                <button className="btn btn-info btn-circle btn" type="button">
                                                    <i className="far fa-comments"></i>
                                                </button>
                                            </div>
                                            <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                    src="plugins/images/users/govinda.jpg" alt="user-img"
                                                    className="img-circle" />
                                                <div className="ml-2">
                                                    <span className="text-dark text-muted">Govinda
                                                        Star <small className="d-block text-success">online</small></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="call-chat">
                                                <button className="btn btn-success text-white btn-circle btn" type="button">
                                                    <i className="fas fa-phone"></i>
                                                </button>
                                                <button className="btn btn-info btn-circle btn" type="button">
                                                    <i className="far fa-comments"></i>
                                                </button>
                                            </div>
                                            <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                    src="plugins/images/users/hritik.jpg" alt="user-img" className="img-circle" />
                                                <div className="ml-2">
                                                    <span className="text-dark text-muted">John
                                                        Abraham<small className="d-block text-success">online</small></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="call-chat">
                                                <button className="btn btn-success text-white btn-circle btn" type="button">
                                                    <i className="fas fa-phone"></i>
                                                </button>
                                                <button className="btn btn-info btn-circle btn" type="button">
                                                    <i className="far fa-comments"></i>
                                                </button>
                                            </div>
                                            <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                    src="plugins/images/users/varun.jpg" alt="user-img" className="img-circle" />
                                                <div className="ml-2">
                                                    <span className="text-dark text-muted">Varun
                                                        Dhavan <small className="d-block text-success">online</small></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
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

