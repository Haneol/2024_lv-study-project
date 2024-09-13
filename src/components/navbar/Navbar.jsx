import React from "react";
import styled from "styled-components";

const NavbarStyle = styled.div`
  background-color: skyblue;
  height: 170px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
`;

function Navbar() {
  return (
    <>
      <NavbarStyle>
        <div className=""></div>
      </NavbarStyle>
    </>
  );
}

export default Navbar;
