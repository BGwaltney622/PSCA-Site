import React from 'react';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src="/PSCA_ColorLogo_BBG.jpg" width="30" height="30" className="d-inline-block align-top" style={imageStyle} alt=''/>
                    PSCA
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="Courses">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Customers">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://brendascornerpsca.blogspot.com/">Brenda's Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

const imageStyle = {
    paddingRight: '3px'
}

export default Nav;