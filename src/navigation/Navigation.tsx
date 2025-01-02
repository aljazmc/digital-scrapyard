import React from "react";
import { NavLink } from "react-router";

export default function Navigation() {
  return(
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/buttons" end>
          Buttons
        </NavLink>
        <NavLink to="/navigations" end>
          Navigations
        </NavLink>
      </nav>
    </div>
  );
}
