import React from 'react';
import './App.css'

function Home () {
    return (
        <body>
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <input type="search" placeholder="search" />
            </div>
        </body>
    );
}

export default Home;