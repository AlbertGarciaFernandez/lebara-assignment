import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../../api/links";
import "./NavBar.css";

import Icon from "../../atoms/Icon/Icon";

//animations
import Aos from "aos";
import "aos/dist/aos.css";

function NavBar() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link
          to="/"
          className="logo"
          onClick={() => setIsNavShowing(false)}
          data-aos="fade-up"
        >
          <Icon type="lebara" alt="Nav Lebara Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}{" "}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <Icon type="close" /> : <Icon type="plusBlue" />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
