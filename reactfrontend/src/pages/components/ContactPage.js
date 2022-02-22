import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';

import './ContactPage.css';

class ContactPage extends Component {

    state = {
        datas: [],
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    sendMessage = async (e) => {
        e.preventDefault();

        this.setState({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
        });
    }

    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/datas');
        console.log(res.data.datas);
        if(res.data.status === 200) {
            this.setState({
                datas: res.data.datas,
            });
        }
    }

    render() {

        var fullname = "";
        var myphone = "";
        var myemail = "";
        var myaddress = "";
        var myfacebook = "";
        var myinstagram = "";
        var mylinkedin = "";

        fullname =
        this.state.datas.map( (item) => {
            if(item.title == "Name") {
                return (
                    <h1 className="name" key={item.id}>{item.detail}</h1>
                );
            } 
        });

        myphone =
        this.state.datas.map( (item) => {
            if(item.title == "Phone") {
                return (
                    <span className="subdescription" key={item.id}>{item.detail}</span>
                );
            } 
        });

        myemail =
        this.state.datas.map( (item) => {
            if(item.title == "Email") {
                return (
                    <span className="subdescription" key={item.id}>{item.detail}</span>
                );
            } 
        });

        myaddress =
        this.state.datas.map( (item) => {
            if(item.title == "Address") {
                return (
                    <span className="subdescription" key={item.id}>{item.detail}</span>
                );
            } 
        });

        myfacebook =
        this.state.datas.map( (item) => {
            if(item.title == "FacebookURL") {
                return (
                    <li key={item.id}><a href={item.detail} target="_blank"><img src={require('./assets/images/icons/icons-facebook.png')} alt="Icons Images"/></a></li>
                );
            } 
        });

        myinstagram =
        this.state.datas.map( (item) => {
            if(item.title == "InstagramURL") {
                return (
                    <li key={item.id}><a href={item.detail} target="_blank"><img src={require('./assets/images/icons/icons-instagram.png')} alt="Icons Images"/></a></li>
                );
            } 
        });

        mylinkedin =
        this.state.datas.map( (item) => {
            if(item.title == "LinkedinURL") {
                return (
                    <li key={item.id}><a href={item.detail} target="_blank"><img src={require('./assets/images/icons/icons-linkedin.png')} alt="Icons Images"/></a></li>
                );
            } 
        });

        return (
            <div className="contactpage">
                <div className="bar">
                    <div className="welcome">
                        <span className="hide">.</span>
                        <h1 className="subtitle">CONTACT</h1>
                        <h1 className="title">Contact With Me</h1>
                    </div>
                </div>

                <div className="split">

                    <div className="splitleft">
                        <div className="welcome">
                            <div className="contact">
                                {fullname}
                                <h2 className="business">Software engineering student</h2>
                                <h2 className="description">I am available for freelance work. Connect with me via and call in to my account.</h2>
                                <h2 className="description">Phone : {myphone}</h2>
                                <h2 className="description">Email : {myemail}</h2>
                                <h2 className="description">Address : {myaddress}</h2>
                                <h3 className="findwithme">FIND WITH ME</h3>
                                <ul className="skill-share d-flex liststyle">
                                    {myfacebook}
                                    {myinstagram}
                                    {mylinkedin}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="splitright">
                        <div className="welcome">
                            <div className="contact">
                                <form className="from">

                                    <label className="yourname">YOUR NAME</label>
                                    <label className="phonenumber">PHONE NUMBER</label>
                                    <div>
                                        <input type="text" id="name" name="name" className="yournameinput" onChange={this.handleInput} value={this.state.name} />
                                        <input type="text" id="phone" name="phone" className="phonenumberinput" onChange={this.handleInput} value={this.state.phone}/>
                                    </div>
                                    
                                    <label className="youremail">EMAIL</label>
                                    <div>
                                        <input type="text" id="email" name="email" className="youremailinput" onChange={this.handleInput} value={this.state.email}/>
                                    </div>

                                    <label className="yoursubject">SUBJECT</label>
                                    <div>
                                        <input type="text" id="subject" name="subject" className="yoursubjectinput" onChange={this.handleInput} value={this.state.subject}/>
                                    </div>

                                    <label className="yourmessage">YOUR MESSAGE</label>
                                    <div>
                                        <textarea type="text" id="message" name="message" className="yourmessageinput" onChange={this.handleInput} value={this.state.message}/>
                                    </div>

                                    <div className="send">
                                        <ul className="sendmessage">
                                            <li  onClick={this.sendMessage}><a>SEND MESSAGE</a></li>
                                        </ul>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;