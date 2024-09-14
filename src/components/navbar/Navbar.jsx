import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";

const NavbarArea = styled.div`
  position: fixed;
  background-color: skyblue;
  width: 100%;
  height: 130px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  padding: 20px 0px;
`;

const IconMenuArea = styled.div`
  display: flex;
  gap: 40px;
`;

// 80px / 170px
function Navbar() {
  return (
    <>
      <NavbarArea>
        <div className="container mx-auto">
          {/* Top Area */}
          <div className="flex justify-between items-center mb-6">
            <h1>
              <img src="images/logo.png" alt="LV" width="32px" height="32px" />
            </h1>

            <Searchbar />

            <IconMenuArea>
              <img src="icons/cart.svg" alt="cart" />
              <img src="icons/setting.svg" alt="admin" />
            </IconMenuArea>
          </div>
          {/* Bottom Area */}
          <div>
            <div className="flex gap-6">
              <img src="icons/home.svg" alt="" />
              <h2 className="text-white font-bold font-16">특별전</h2>
              <h2 className="text-white font-bold font-16">여성</h2>
              <h2 className="text-white font-bold font-16">남성</h2>
              <h2 className="text-white font-bold font-16">가족</h2>
            </div>
          </div>
        </div>
      </NavbarArea>
      <div style={{ height: "130px" }}></div>
    </>
  );
}

export default Navbar;
