import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import loginside from '../../Images/loginside.jpg'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import StarRatings from 'react-star-ratings';


export default function Feedback() {
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

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8 col-xlg-9 col-md-12 mx-auto">
                                <div class="card">
                                    <div class="card-body">
                                        <form class="form-horizontal form-material" style={{ textAlign: 'left' }}>
                                            <label class="col-md-12 p-0">Questions</label>
                                            <div class="col-md-12 border-bottom p-0">
                                                <textarea rows="4" class="form-control p-0 border-0" placeholder="Add Questions" onChange={(e) => setQuestion(e.target.value)}></textarea>
                                            </div>
                                            <label class="col-md-12 p-0">Comments</label>
                                            <div class="col-md-12 border-bottom p-0">
                                                <textarea rows="4" class="form-control p-0 border-0" placeholder="Add Comments for Feedback" onChange={(e) => setComments(e.target.value)}></textarea>
                                            </div>
                                            <div class="form-group mb-4">
                                                <label for="example-email" class="col-md-12 p-0">Ratings</label>
                                                <StarRatings
                                                    starRatedColor='rgb(230, 67, 47)'
                                                    rating={rating}
                                                    starDimension="20px"
                                                    starSpacing="10px"
                                                    changeRating={changeRating}
                                                />

                                            </div>
                                            {/* <hr />
                                            <label class="col-md-12 p-0">Questions</label>
                                            <div class="col-md-12 border-bottom p-0">
                                                <textarea rows="4" class="form-control p-0 border-0" placeholder="Sevice Desription"></textarea>
                                            </div> */}
                                            <div class="form-group mb-4">
                                                <div class="col-sm-12 mt-3">
                                                    <button class="btn text-white" style={{ backgroundColor: '#76323f' }} onClick={Feedback}>Feedback</button>
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

