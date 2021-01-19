import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import loginside from '../../Images/loginside.jpg'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import StarRatings from 'react-star-ratings';


export default function Help() {
    let history = useHistory();

    const [rating, setRating] = useState(3);
    const changeRating = (value) => {
        setRating(value)
    }


    const [question, setQuestion] = useState("");
    const [comments, setComments] = useState("");

    function Feedback(e) {
        e.preventDefault();
        const { data: response } = axios.post(`http://ecommerce-poc-api.nastechltd.co/api/feedback/1`, {
            client_id: question,
            user_id: '1',
            question_id: '1',
            comments: comments,
            overall_rating: rating
        })
            .then((response) => {
                if (response) {
                    history.push('/admindashboard');
                }
            }, (error) => {
                console.log(Error);
                history.push('/feedback');
                alert(Error)
            });
    }


    return (
        <>
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <Nav />
                <Sidebar />
                <div className="page-wrapper">
                    <div class="container p-4">
                        <div class="row">
                            <div class="col-md-8 mx-auto">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="col-md-12 row" style={{ padding: '0px', marginBottom: '10px' }}>

                                            <div class="col-md-2">
                                                <img src="http://dinus.org/img/fakultas/FIK/cs/cs.svg" />
                                                <div style={{ marginLeft: '30px' }}>
                                                    <img src="http://dinus.org/img/fakultas/FIK/cs/cs.png" width="70px" height="70px" class="img-circle" style={{ border: '3px solid #052C52' }} />
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <hr />
                                                <p style={{ paddingLeft: '55px', fontSize: '1.3em' }}><strong>Zaskia Amanda</strong></p>

                                            </div>


                                        </div>

                                        <form>
                                            <table class="table">
                                                <tr>
                                                    <td>
                                                        <input type="email" class="form-control" id="mailtip2" placeholder="Your e-mail" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="form-control" type="text" placeholder="Subject" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <textarea class="form-control" rows="4" placeholder="Message text . . ."></textarea>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button class="btn btn-sm" style={{ width: '100%',backgroundColor:'rgb(118, 50, 63)',color:'white' }}><i class="fa fa-envelope-o" style={{ paddingRight: '5px' }}></i> Send</button>
                                                    </td>
                                                </tr>
                                            </table>

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

