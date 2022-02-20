import React, {Component, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Home.css';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import EducationPage from './components/EducationPage';
import ProjectPage from './components/ProjectPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';

class Home extends Component {

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

        var name = "";

        name =
        this.state.datas.map( (item) => {

            if(item.title == "Logo") {
                return (
                    <div key={item.id} className="logo">
                        <a  href="http://localhost:3000/admin" target="_blank">{item.detail}</a>
                    </div>
                );
            }
            
        });
        
        return (
            <div>
                <header>
                    {name}
                    <nav>
                        <ul className="nav_links">
                            <li><a href="#HomeSection">HOME</a></li>
                            <li><a href="#ProfileSection">PROFILE</a></li>
                            <li><a href="#EducationSection">EDUCATION</a></li>
                            <li><a href="#ProjectSection">PROJECT</a></li>
                            <li><a href="#ResumeSection">RESUME</a></li>
                            <li><a href="#ContactSection">CONTACT</a></li>
                        </ul>
                    </nav> 
                </header>
                <div className="SectionContainer" id="navbar">
                    <div id="HomeSection" className="HomeSection">
                        <HomePage />
                    </div>
                    <div id="ProfileSection" className="ProfileSection">
                        <ProfilePage />
                    </div>
                    <div id="EducationSection" className="EducationSection">
                        <EducationPage />
                    </div>
                    <div id="ProjectSection" className="ProjectSection">
                        <ProjectPage />
                    </div>
                    <div id="ResumeSection" className="ResumeSection">
                        <ResumePage />
                    </div>
                    <div id="ContactSection" className="ContactSection">
                        <ContactPage />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;