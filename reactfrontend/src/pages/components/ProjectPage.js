import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';

import './ProjectPage.css';

class ProjectPage extends Component {

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

        return (
            <div className="projectpage">
                <div className="bar">
                    <div className="welcome">
                        <span className="hide">.</span>
                        <h1 className="subtitle">VISIT MY PROJECT</h1>
                        <h1 className="title">My Project</h1>
                    </div>
                </div>

                <div className="rowone">

                    <div className="boxone">
                        <img src={require('./assets/images/opencv-python.png')} alt="Icons Images"/>
                        <h4 className="application">APPLICATION</h4>
                        <h1 className="nameapplication">eKYC Face Recognition Project</h1>
                    </div>

                    <div className="boxtwo">
                        <img src={require('./assets/images/react.png')} alt="Icons Images"/>
                        <h4 className="application">WEB APPLICATION</h4>
                        <h1 className="nameapplication">COVID-19 Web Application</h1>
                    </div>

                    <div className="boxthree">
                        <img src={require('./assets/images/reactnative.png')} alt="Icons Images"/>
                        <h4 className="application">MOBILE APPLICATION</h4>
                        <h1 className="nameapplication">MOC Application</h1>
                    </div>

                </div>

                <div className="rowtwo">

                    <div className="boxone">
                        <img src={require('./assets/images/reactnative.png')} alt="Icons Images"/>
                        <h4 className="application">MOBILE APPLICATION</h4>
                        <h1 className="nameapplication">HS Application</h1>
                    </div>

                    <div className="boxtwo">
                        <img src={require('./assets/images/reactnative.png')} alt="Icons Images"/>
                        <h4 className="application">MOBILE APPLICATION</h4>
                        <h1 className="nameapplication">TW Application</h1>
                    </div>

                    <div className="boxthree">
                        <img src={require('./assets/images/reactnative.png')} alt="Icons Images"/>
                        <h4 className="application">MOBILE APPLICATION</h4>
                        <h1 className="nameapplication">MB Application</h1>
                    </div>

                </div>

            </div>
        );
    }
}

export default ProjectPage;