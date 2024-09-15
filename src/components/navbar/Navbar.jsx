import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";
import CartBadge from "./CartBadge";

// Styled Components

const NavbarArea = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  transition: height 0.3s ease;
  height: ${(props) => (props.isExpanded ? "130px" : "80px")};
  padding: 20px 0px;
`;

const IconMenuArea = styled.div`
  display: flex;
  gap: 20px;
`;

const BottomArea = styled.div`
  max-height: ${(props) => (props.isExpanded ? "50px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const ArrowButton = styled.button`
  display: ${(props) => (props.isExpanded ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 15px;

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 3px;
    background: #effffa;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;

    &:first-child {
      transform: ${(props) =>
        props.isOpen
          ? "rotate(45deg) translate(5px, 0px)"
          : "rotate(0) translate(0, -5px)"};
    }

    &:nth-child(2) {
      transform: ${(props) =>
        props.isOpen
          ? "scale(0) translate(12px, 0px)"
          : "scale(1) translate(0px, 0px)"};
    }

    &:last-child {
      transform: ${(props) =>
        props.isOpen
          ? "rotate(-45deg) translate(4.5px, -0px)"
          : "rotate(0) translate(0, 5px)"};
    }
  }
`;

const MenuNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 0 12px 20px 12px;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: #fff;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.3);
    bottom: 8px;
    left: calc(50% - 2px);
    width: 4px;
    height: 4px;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0.5;
  }

  &.active::after {
    opacity: 1;
  }

  &.active {
    z-index: 1;
  }
`;

const HoverBlurArea = styled(NavLink)`
  padding: 12px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    border-radius: 50%;
  }

  &:hover::after {
    opacity: 1;
  }

  img {
    position: relative;
    z-index: 1;
  }
`;

const AdminNavLink = styled(NavLink)`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    border-radius: 50%;
  }

  &.active::after {
    opacity: 1;
  }
`;

// Navbar Components

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY ?? window.pageYOffset;
      setIsExpanded(currentScrollPos < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      setIsMenuOpen(false);
    }
  }, [isExpanded]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavbarArea isExpanded={isExpanded || isMenuOpen}>
        <div className="container mx-auto">
          {/* Top Area */}
          <div className="flex justify-center">
            <div className="absolute">
              <Searchbar />
            </div>
          </div>
          <div className="flex justify-between items-center mb-3 px-3">
            <div className="flex items-center">
              <ArrowButton
                isExpanded={isExpanded}
                isOpen={isMenuOpen}
                onClick={toggleMenu}
              >
                <div />
                <div />
                <div />
              </ArrowButton>
              <h1>
                <img
                  src="images/logo.png"
                  alt="LV"
                  width="32px"
                  height="32px"
                  onClick={scrollToTop}
                  className="cursor-pointer"
                />
              </h1>
            </div>
            <IconMenuArea>
              <HoverBlurArea>
                <CartBadge
                  onClick={() => {
                    alert("Cart");
                  }}
                  itemCount={999} //TODO : cart state 가져와서 length로 변경하기
                />
              </HoverBlurArea>
              <HoverBlurArea>
                <AdminNavLink to="/admin">
                  <img src="icons/setting.svg" alt="Admin" />
                </AdminNavLink>
              </HoverBlurArea>
            </IconMenuArea>
          </div>
          {/* Bottom Area */}
          <BottomArea isExpanded={isExpanded || isMenuOpen}>
            <ul className="flex pb-5">
              <li>
                <MenuNavLink to="/">
                  <img src="icons/home.svg" alt="" />
                </MenuNavLink>
              </li>
              <li className="text-white font-bold font-16">
                <MenuNavLink to="/shopList/special">특별전</MenuNavLink>
              </li>
              <li className="text-white font-bold font-16 ">
                <MenuNavLink to="/shopList/women">여성</MenuNavLink>
              </li>
              <li className="text-white font-bold font-16 ">
                <MenuNavLink to="/shopList/men">남성</MenuNavLink>
              </li>
              <li className="text-white font-bold font-16 ">
                <MenuNavLink to="/shopList/family">가족</MenuNavLink>
              </li>
            </ul>
          </BottomArea>
        </div>
      </NavbarArea>
      <div style={{ height: "130px" }}></div>
    </>
  );
}

export default Navbar;
