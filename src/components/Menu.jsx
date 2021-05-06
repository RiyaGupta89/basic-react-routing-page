import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="header">
        <NavLink to="/home" activeClassName="active_class" className="link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active_class" className="link">
          About Us
        </NavLink>
        <NavLink to="/contact" activeClassName="active_class" className="link">
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
