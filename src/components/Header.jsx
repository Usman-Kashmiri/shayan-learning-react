import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoSvg from '../logo.svg';
import { navigation } from "../data/data";

const Header = () => {

  return (
    <header>
      <nav className="navbar">
        <Link to="/"><img src={logoSvg} alt="brand" /></Link>
       {
            navigation.map((nav, index)=>{
                return (
                    <Nav key={index} path={nav.path} name={nav.name} />
                )
            })
       }
      </nav>
    </header>
  );
};


const Nav = ({path, name}) => {

    const location = useLocation();

  return (
    <Link to={path} className={location.pathname === path ? "active" : ""}>{name}</Link>
  )
}

export default Header;
