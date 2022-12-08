import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import NavLinks from "./NavLinks";

import images from "../../constants/images";

import "./Navbar.css";

const navMap = NavLinks.map((val, index) => {
  return (
    <li key={val.title + index} className="p__opensans">
      <Link
        activeClass="active"
        to={val.link}
        spy={true}
        // smooth={true}
        offset={-5}
        duration={500}
      >
        {val.title}
      </Link>
    </li>
  );
});

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app_navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">{navMap}</ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">{navMap}</ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
