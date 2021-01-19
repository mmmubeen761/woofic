import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import loginside from '../../Images/loginside.jpg'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import './Chat.css'


export default function Chat() {
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
            client_id: '1'
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
                <div className="page-wrapper" >
                    <div id="frame">
                        <div id="sidepanel">
                            <div id="profile">
                                <div class="wrap">
                                    <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" class="online" alt="" />
                                    <p>Mike Ross</p>
                                    <i class="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                                    <div id="status-options">
                                        <ul>
                                            <li id="status-online" class="active"><span class="status-circle"></span> <p>Online</p></li>
                                            <li id="status-away"><span class="status-circle"></span> <p>Away</p></li>
                                            <li id="status-busy"><span class="status-circle"></span> <p>Busy</p></li>
                                            <li id="status-offline"><span class="status-circle"></span> <p>Offline</p></li>
                                        </ul>
                                    </div>
                                    <div id="expanded">
                                        <label for="twitter"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                                        <input name="twitter" type="text" value="mikeross" />
                                        <label for="twitter"><i class="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                                        <input name="twitter" type="text" value="ross81" />
                                        <label for="twitter"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                                        <input name="twitter" type="text" value="mike.ross" />

                                    </div>
                                </div>
                            </div>
                            <div id="search">
                                <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
                                <input type="text" placeholder="Search contacts..." />
                            </div>
                            <div id="contacts">
                                <ul>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status online"></span>
                                            <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Louis Litt</p>
                                                <p class="preview">You just got LITT up, Mike.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact active">
                                        <div class="wrap">
                                            <span class="contact-status busy"></span>
                                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Harvey Specter</p>
                                                <p class="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status away"></span>
                                            <img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Rachel Zane</p>
                                                <p class="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status online"></span>
                                            <img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Donna Paulsen</p>
                                                <p class="preview">Mike, I know everything! I'm Donna..</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status busy"></span>
                                            <img src="http://emilcarlsson.se/assets/jessicapearson.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Jessica Pearson</p>
                                                <p class="preview">Have you finished the draft on the Hinsenburg deal?</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status"></span>
                                            <img src="http://emilcarlsson.se/assets/haroldgunderson.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Harold Gunderson</p>
                                                <p class="preview">Thanks Mike! :)</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status"></span>
                                            <img src="http://emilcarlsson.se/assets/danielhardman.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Daniel Hardman</p>
                                                <p class="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status busy"></span>
                                            <img src="http://emilcarlsson.se/assets/katrinabennett.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Katrina Bennett</p>
                                                <p class="preview">I've sent you the files for the Garrett trial.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status"></span>
                                            <img src="http://emilcarlsson.se/assets/charlesforstman.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Charles Forstman</p>.
                                                <p class="preview">Mike, this isn't over.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="contact">
                                        <div class="wrap">
                                            <span class="contact-status"></span>
                                            <img src="http://emilcarlsson.se/assets/jonathansidwell.png" alt="" />
                                            <div class="meta">
                                                <p class="name">Jonathan Sidwell</p>
                                                <p class="preview"><span>You:</span> That's bullshit. This deal is solid.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id="bottom-bar">
                                <button id="addcontact"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
                                <button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
                            </div>
                        </div>
                        <div class="content" >
                            <div class="contact-profile">
                                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                <p>Harvey Specter</p>
                                <div class="social-media">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="messages" style={{width:'100%',padding:'10px'}}>
                                <ul>
                                    <li class="sent">
                                        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                                        <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                                    </li>
                                    <li class="replies">
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p>When you're backed against the wall, break the god damn thing down.</p>
                                    </li>
                                    <li class="replies">
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p>Excuses don't win championships.</p>
                                    </li>
                                    <li class="sent">
                                        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                                        <p>Oh yeah, did Michael Jordan tell you that?</p>
                                    </li>
                                    <li class="replies">
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p>No, I told him that.</p>
                                    </li>
                                    <li class="replies">
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p>What are your choices when someone puts a gun to your head?</p>
                                    </li>
                                    <li class="sent">
                                        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                                        <p>What are you talking about? You do what they say or they shoot you.</p>
                                    </li>
                                    <li class="replies">
                                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="message-input">
                                <div class="wrap">
                                    <input type="text" placeholder="Write your message..." />
                                        <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
                                    <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>
        </>
    );
}

