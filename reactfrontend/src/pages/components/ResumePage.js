import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';

import './ResumePage.css';

class ResumePage extends Component {

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

        var education = "";

        // highschool
        var hsyear = "";
        var hsname = "";
        var hsdepartment = "";
        var hsgpa = "";

        // university
        var bdyear = "";
        var bdname = "";
        var bddepartment = "";
        var bdgpa = "";

        // highschool
        hsyear =
        this.state.datas.map( (item) => {
            if(item.title == "HSyear") {
                return (
                    <span className="subtitle" key={item.id}>{item.detail}</span>
                );
            } 
        });

        hsname =
        this.state.datas.map( (item) => {
            if(item.title == "HSname") {
                return (
                    <h2 className="school" key={item.id}>{item.detail}</h2>
                );
            } 
        });

        hsdepartment =
        this.state.datas.map( (item) => {
            if(item.title == "HSdepartment") {
                return (
                    <h3 className="department" key={item.id}>{item.detail}</h3>
                );
            } 
        });

        hsgpa =
        this.state.datas.map( (item) => {
            if(item.title == "HSgpa") {
                return (
                    <a className="gpa" key={item.id}>{item.detail}</a>
                );
            } 
        });

        // university
        bdyear =
        this.state.datas.map( (item) => {
            if(item.title == "BDyear") {
                return (
                    <span className="subtitle" key={item.id}>{item.detail}</span>
                );
            } 
        });

        bdname =
        this.state.datas.map( (item) => {
            if(item.title == "BDname") {
                return (
                    <h2 className="university" key={item.id}>{item.detail}</h2>
                );
            } 
        });

        bddepartment =
        this.state.datas.map( (item) => {
            if(item.title == "BDdepartment") {
                return (
                    <h3 className="department" key={item.id}>{item.detail}</h3>
                );
            } 
        });

        bdgpa =
        this.state.datas.map( (item) => {
            if(item.title == "BDgpa") {
                return (
                    <a className="gpa" key={item.id}>{item.detail}</a>
                );
            } 
        });

        education =
        this.state.datas.map( (item) => {
            if(item.title == "Name") {
                return (
                    <div key={item.id}>
                        <div className="split">
                            <div className="splitleft">
                                <div className="welcome">
                                    {hsyear}
                                    <h1 className="title">High School</h1>
                                    <div className="highschool">
                                        {hsname}
                                        {hsdepartment}
                                        <h3 className="current">Current GPA : {hsgpa}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="splitright">
                                <div className="welcome">
                                    {bdyear}
                                    <h1 className="title">Bachelor Degrees</h1>
                                    <div className="bachelordegrees">
                                        {bdname}
                                        {bddepartment}
                                        <h3 className="current">Current GPA : {bdgpa}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } 
        });

        return (
            <div className="resumepage">
                <div className="bar">
                    <div className="welcome">
                        <span className="hide">.</span>
                        <h1 className="subtitle">7+ YEARS OF EXPERIENCE</h1>
                        <h1 className="title">My Resume</h1>
                    </div>
                    <nav className="menu-bar">
                        <div className="group">
                            <a className="item" href="#slides__1">Education</a>
                            <a className="item" href="#slides__2">Professional Skills</a>
                        </div>
                    </nav>
                </div>

                <div className="slider-container">
                    <div className="slider">
                        <div className="slides">

                            <div id="slides__1" className="slide">
                                {education}
                            </div>

                            <div id="slides__2" className="slide">
                                <div className="split">
                                    <div className="splitleft">
                                        <div className="welcome">
                                            <span className="subtitle">Features</span>
                                            <h1 className="title">Coding Languages</h1>
                                            <div className="codinglanguages">
                                                
                                                <li>
                                                    <h2 className="languages">Python</h2>
                                                    <span className="bar"><span className="python"></span></span>
                                                </li>
                                                
                                                <li>
                                                    <h2 className="languages">Java</h2>
                                                    <span className="bar"><span className="java"></span></span>
                                                </li>

                                                <li>
                                                    <h2 className="languages">JavaScript</h2>
                                                    <span className="bar"><span className="javascript"></span></span>
                                                </li>

                                                <li>
                                                    <h2 className="languages">TypeScript</h2>
                                                    <span className="bar"><span className="typescript"></span></span>
                                                </li>

                                                <li>
                                                    <h2 className="languages">HTML 5</h2>
                                                    <span className="bar"><span className="html"></span></span>
                                                </li>

                                                <li>
                                                    <h2 className="languages">CSS</h2>
                                                    <span className="bar"><span className="css"></span></span>
                                                </li>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="splitright">
                                        <div className="welcome">
                                            <span className="subtitle">Features</span>
                                            <h1 className="title">Frameworks</h1>
                                            <div className="frameworks">

                                                <li>
                                                    <h2 className="languages">React</h2>
                                                    <span className="bar"><span className="react"></span></span>
                                                </li>
                                                
                                                <li>
                                                    <h2 className="languages">React Native</h2>
                                                    <span className="bar"><span className="reactnative"></span></span>
                                                </li>

                                                <li>
                                                    <h2 className="languages">Laravel</h2>
                                                    <span className="bar"><span className="laravel"></span></span>
                                                </li>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

export default ResumePage;