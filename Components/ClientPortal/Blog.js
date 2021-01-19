import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import loginside from '../../Images/loginside.jpg'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import StarRatings from 'react-star-ratings';
import './BLog.css';


export default function Blog() {
    let history = useHistory();

    const [rating, setRating] = useState(3);
    const changeRating = (value) => {
        setRating(value)
    }


    const [question, setQuestion] = useState("");
    const [password, setPassword] = useState("");

    function Feedback(e) {
        e.preventDefault();
        const { data: response } = axios.post(`http://ecommerce-poc-api.nastechltd.co/api/feedback`, {
            question: question,
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
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <Nav />
                <Sidebar />
                <div className="page-wrapper">
                    <div class="container">
                        <div id="blog" class="row">

                            <div class="col-md-10 mx-auto my-3">
                                <div className="mr-auto">
                                <a class="btn btn-blog pull-right btn-primary " href="http://bootsnipp.com/user/snippets/2RoQ">Create New Blog</a>
                                </div>
                            </div>
                         
                            <div class="col-md-10 mx-auto border my-3 blogShort">
                                <h1>Title 1</h1>
                                <img src="assets/plugins/images/led.jpeg" alt="post img" class="pull-left img-responsive thumb margin10 img-thumbnail w-25" />

                                <em>This snippet use <a href="http://bootsnipp.com/snippets/featured/sexy-sidebar-navigation" target="_blank">Sexy Sidebar Navigation</a></em>
                                <article><p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                                    Lorem Ipsum.
                         </p></article>
                                <a class="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a>
                            </div>
                            <div class="col-md-10 mx-auto border my-3 blogShort">
                                <h1>Title 2</h1>
                                <img src="assets/plugins/images/led.jpeg" alt="post img" class="pull-left img-responsive thumb margin10 img-thumbnail w-25" />
                                <article><p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                                    Lorem Ipsum.
                         </p></article>
                                <a class="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a>
                            </div>

                            <div class="col-md-10 mx-auto border my-3 blogShort">
                                <h1>Title 3</h1>
                                <img src="assets/plugins/images/led.jpeg" alt="post img" class="pull-left img-responsive thumb margin10 img-thumbnail w-25" />
                                <article><p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                                    Lorem Ipsum.
                         </p></article>
                                <a class="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a>
                            </div>

                            <div class="col-md-12 gap10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

