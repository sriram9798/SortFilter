import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-fluid">
        <nav className="navbar navbar-inverse">
                <div className="container-fluid" style={{ color: 'black' }}>
                <div className="navbar-header" >
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">Edumato</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li ><Link to="/">Home</Link></li>
                        <li><Link to="/vieworder">Booking</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header;