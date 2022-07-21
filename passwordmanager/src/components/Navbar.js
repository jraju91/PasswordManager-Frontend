import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>

        {/* <NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn> */}
        <NavBtn>
          <NavBtnLink to="/login">Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
