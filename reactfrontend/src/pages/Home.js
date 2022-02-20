import React, {Component, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './Home.css';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import EducationPage from './components/EducationPage';
import ProjectPage from './components/ProjectPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';

class Home extends Component {

    render() {
        
        return (
            <div>
                <header>
                    <a href="/">POOM</a>
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
                <div className="SectionContainer">
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