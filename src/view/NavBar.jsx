import { react, useState } from "react";
import logowithtext from '../assets/Kwithtextlogo.svg';
import searchIcon from '../assets/Search.svg';
import menuIcon from '../assets/menu.svg';
import '../view/NavBar.css'
const NavBar = () => { 
    return  (
            <div className="NavBar">
                <img className="logo" src={logowithtext} alt="Kien Tran"/>
                <span className="menuAndSearch">
                    <img className="searchIcon" src={searchIcon} alt="search"/>
                    <img src={menuIcon} alt="menu"/>
                </span>
                    
                
            </div>
        );
};

export default NavBar; 
