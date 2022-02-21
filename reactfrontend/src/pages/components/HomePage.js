import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';

import './HomePage.css';

class HomePage extends Component {

    state = {
        datas: [],
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

        var nickname = "";
        var description = "";

        nickname =
        this.state.datas.map( (item) => {
            if(item.title == "Nickname") {
                return (
                    <span className="nickname" href="/" key={item.id}>{item.detail}</span>
                );
            } 
        });

        description =
        this.state.datas.map( (item) => {
            if(item.title == "Description") {
                return (
                    <p className="description" key={item.id}>{item.detail}</p>
                );
            }    
        });
            

        return (
            <div className="homePage">
                <div className="split">
                    <div className="splitleft">
                        <div className="welcome">
                            <span className="subtitle">WELCOME TO MY WORLD</span>
                            <h1 className="title">Hi, I'm {nickname}</h1>
                            <h2 className="header" data-text="a">a <span className="header-caption" data-text="Developer.">Developer.</span></h2>
                            {description}
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                <div className="social-share-inner-left">
                                    <span className="title">FIND WITH ME</span>
                                    <ul className="skill-share d-flex liststyle">
                                        <li><a  href="https://www.instagram.com/p2omhmp/" target="_blank"><img src={require('./assets/images/icons/icons-facebook.png')} alt="Icons Images"/></a></li>
                                        <li><a  href="https://www.instagram.com/p2omhmp/" target="_blank"><img src={require('./assets/images/icons/icons-instagram.png')} alt="Icons Images"/></a></li>
                                        <li><a  href="https://www.linkedin.com/in/heammapoom-wittayawarojkit-28a172132/" target="_blank"><img src={require('./assets/images/icons/icons-linkedin.png')} alt="Icons Images"/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                <div className="skill-share-inner">
                                    <span className="title">BEST SKILL ON</span>
                                    <ul className="skill-share d-flex liststyle">
                                        <li><img src={require('./assets/images/icons/icons-javascript.png')} alt="Icons Images"/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="splitright">
                        <div className="welcome">
                            <span className="subtitle">.</span>
                        </div>
                        <div className="image">
                            <ul className="img-show">
                                <li><img src={require('./assets/images/img-poom.png')} alt="Icons Images"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;