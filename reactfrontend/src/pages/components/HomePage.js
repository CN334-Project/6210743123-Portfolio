import React, {Component, useState, useEffect } from 'react';

import './Styles.css';

function HomePage() {
    return (
        <div className="homePage">
            <div className="split">
                <div className="splitleft">
                    <span className="subtitle">WELCOME TO MY WORLD</span>
                    <h1 className="title">Hi, I'm <span>Poom</span></h1>
                    <h2 className="header" data-text="a">a <span className="header-caption" data-text="Developer.">Developer.</span></h2>
                </div>
                <div className="splitright">
                    <h2>.</h2>
                    <h2 className="title">Image</h2>
                </div>
            </div>
        </div>
    );
}

export default HomePage;