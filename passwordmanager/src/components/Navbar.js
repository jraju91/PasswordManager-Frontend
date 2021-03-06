import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Nav, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
const Navbar = () => {
  const userId = JSON.parse(localStorage.getItem("user"));
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    navigate("/");
  };
  useEffect(() => {
    if (userId) {
      setLoggedIn(true);
    }
  }, userId);
  // const changeLoginButton = () => {
  //   setLoggedIn(true);
  // };
  // const loggedout = () => {

  // }

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
        {loggedIn ? (
          <NavBtn>
            <NavBtnLink onClick={() => logout()} to="/">
              Logout
            </NavBtnLink>
          </NavBtn>
        ) : null}
      </Nav>
    </>
  );
};
export default Navbar;
