import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import loginside from '../../Images/loginside.jpg'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import StarRatings from 'react-star-ratings';


export default function Complain() {
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
                            <div className="col-md-8">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-4 bold h5">Help & Support</div>
                                            <div class="col-md-2"></div>
                                            <div class="col-md-2"></div>
                                            <div class="col-md-4">
                                                <input class="form-control" type="text" placeholder="Search Query..." />
                                            </div>
                                            <div class="col-md-8 py-2 ml-4" style={{borderLeft:'4px solid rgb(118, 50, 63)'}}>Find your Solution...</div> 
                                            <div class="col-md-12 py-4 pl-5 text-muted">Lorem ipsum code maka dij oniefejioniefeji oniefejijoniefejiloniefejin v iov jnwefj jjv vv khio v oiwvwj vnwlkvno ikvnkl rfojf ofkrf orjer pkjv </div>
                                            <div class="col-md-11 py-4  border-bottom border-top mx-auto">Q. Lorem ipsum code maka dij oniefejioniefeji oniefejijoniefejiloniefejin v iov jnwefj jjv vv khio v oiwvwj vnwlkvno ikvnkl rfojf ofkrf orjer pkjv </div>
                                            <div class="col-md-11 py-4  border-bottom mx-auto">Q. Lorem ipsum code maka dij oniefejioniefeji oniefejijoniefejiloniefejin v iov jnwefj jjv vv khio v oiwvwj vnwlkvno ikvnkl rfojf ofkrf orjer pkjv </div>
                                            <div class="col-md-11 py-4  border-bottom mx-auto">Q. Lorem ipsum code maka dij oniefejioniefeji oniefejijoniefejiloniefejin v iov jnwefj jjv vv khio v oiwvwj vnwlkvno ikvnkl rfojf ofkrf orjer pkjv </div>
                                            <div class="col-md-11 py-4  border-bottom mx-auto">Q. Lorem ipsum code maka dij oniefejioniefeji oniefejijoniefejiloniefejin v iov jnwefj jjv vv khio v oiwvwj vnwlkvno ikvnkl rfojf ofkrf orjer pkjv </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="col-md-12 row" style={{ padding: '0px', marginBottom: '10px' }}>

                                            <div class="col-md-10 ">
                                                Didn't find your solution ?
                                            </div>
                                            <div class="col-md-8 ml-2 m-2" style={{borderLeft:'4px solid rgb(118, 50, 63)'}}>Ask your query</div> 
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
                                                        <textarea class="form-control" rows="4" placeholder="Query text . . ."></textarea>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button class="btn btn-sm" style={{ width: '100%', backgroundColor: 'rgb(118, 50, 63)', color: 'white' }}><i class="fa fa-envelope-o" style={{ paddingRight: '5px' }}></i> Send</button>
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

