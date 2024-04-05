import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="header" />
            <div className="container">
                <img className="logo" src="Images/LOGO ALIEN.png" alt="Logo Alien" />
                <div className="links">
                    <span className="icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="sobre_nos.html">Sobre nós</a></li>
                        <li><a href="projeto.html">Projeto</a></li>
                        <li><a href="demo.html">Demo</a></li>
                        <li><a href="como_vai_ser.html">Como vai ser?</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
