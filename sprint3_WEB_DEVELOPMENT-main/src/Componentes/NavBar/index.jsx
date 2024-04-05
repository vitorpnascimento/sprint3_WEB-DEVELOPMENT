import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (
        <div class="header">
            <div class="container">
                <img class="logo" src="Images/LOGO ALIEN.png" alt=" Logo Alien" />
                <div class="links">
                    <span class="icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="sobre_nos.html">Sobre nós</a></li>
                        <li><a href="projeto.html">Projeto</a></li>
                        <li><a href="como_vai_ser.html">Como vai ser?</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
