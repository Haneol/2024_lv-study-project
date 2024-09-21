import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { NavLink, useLocation } from "react-router-dom";
import CartBadge from "./CartBadge";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";
import SearchModal from "../searchModal/SearchModal";

// Styled Components

const NavbarArea = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  transition: height 0.3s ease;

  /* 모바일 스타일 */
  height: 64px;
  padding: 6px 0px;
  ${(props) =>
    props.isMenuOpen &&
    `
    height: 280px;
  `}

  /* 데스크톱 스타일 */
  @media (min-width: 768px) {
    height: 80px;
    padding: 20px 0px;
    ${(props) =>
      (props.isExpanded || props.isMenuOpen) &&
      `
      height: 130px;
    `}
  }
`;

const IconMenuArea = styled.div`
  display: flex;
  gap: 20px;
`;

const BottomArea = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease;

  /* 모바일 스타일 */
  max-height: 0;
  ${(props) =>
    props.isMenuOpen &&
    `
    max-height: 280px;
  `}

  /* 데스크톱 스타일 */
  @media (min-width: 768px) {
    max-height: 0;
    ${(props) =>
      (props.isExpanded || props.isMenuOpen) &&
      `
      max-height: 50px;
    `}
  }
`;

const ArrowButton = styled.button`
  display: flex;
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

  /* 모바일 스타일 */
  display: flex;

  /* 데스크톱 스타일 */
  @media (min-width: 768px) {
    display: ${(props) => (props.isExpanded ? "none" : "flex")};
  }

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
          ? "rotate(45deg) translate(2px, 2px)"
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
          ? "rotate(-45deg) translate(2px, -2px)"
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
    width: 4px;
    height: 4px;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;

    /* 모바일 스타일 */
    bottom: calc(50% + 8px);
    left: -4px;

    /* 데스크톱 스타일 */
    @media (min-width: 768px) {
      bottom: 8px;
      left: calc(50% - 2px);
    }
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

const FloatingButtonArea = styled.div`
  position: fixed;
  z-index: 10;
  width: 64px;
  height: 64px;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

// Navbar Components

function Navbar({ scrollToTop }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const cartList = useSelector((state) => state.cart.cartList);

  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);

  useEffect(() => {
    setIsExpanded(scrollPosition < 50);
  }, [scrollPosition]);

  useEffect(() => {
    if (isExpanded) {
      setIsMenuOpen(false);
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const onClickSearch = () => {
    dispatch({ type: "@modal/searchOpen" });
  };

  const onClickCart = () => {
    dispatch({ type: "@modal/cartOpen" });
  };

  return (
    <>
      <Cart />
      <SearchModal />
      <NavbarArea isExpanded={isExpanded} isMenuOpen={isMenuOpen}>
        <div className="container mx-auto">
          {/* Top Area */}
          <div className="hidden md:flex justify-center">
            <div className="absolute">
              <Searchbar onClickSearchbar={onClickSearch} />
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
                  src="/images/logo.png"
                  alt="LV"
                  width="32px"
                  height="32px"
                  onClick={() => {
                    scrollToTop();
                  }}
                  className="hidden md:block cursor-pointer"
                />
              </h1>
            </div>
            {location.pathname === "/" ? (
              <h1>
                <img
                  src="/images/logo.png"
                  alt="LV"
                  width="32px"
                  height="32px"
                  onClick={() => {
                    scrollToTop();
                  }}
                  className="block md:hidden cursor-pointer"
                />
              </h1>
            ) : (
              <h1>
                <NavLink to="/" onClick={closeMenu}>
                  <img
                    src="/images/logo.png"
                    alt="LV"
                    width="32px"
                    height="32px"
                    className="block md:hidden cursor-pointer"
                  />
                </NavLink>
              </h1>
            )}

            <IconMenuArea>
              <div className="hidden md:block">
                <HoverBlurArea>
                  <CartBadge
                    onClick={onClickCart}
                    itemCount={cartList.length}
                  />
                </HoverBlurArea>
                <HoverBlurArea>
                  <AdminNavLink to="/Admin">
                    <img src="/icons/setting.svg" alt="Admin" />
                  </AdminNavLink>
                </HoverBlurArea>
              </div>
              <div className="block md:hidden">
                <HoverBlurArea onClick={onClickSearch}>
                  <img src="/icons/search.svg" alt="" />
                </HoverBlurArea>
              </div>
            </IconMenuArea>
          </div>
          {/* Bottom Area */}
          <BottomArea isExpanded={isExpanded} isMenuOpen={isMenuOpen}>
            <ul className="flex flex-col items-center md:flex-row pb-5">
              <li className="hidden md:block">
                <MenuNavLink to="/">
                  <img src="/icons/home.svg" alt="홈" />
                </MenuNavLink>
              </li>
              <li className="text-white font-bold font-16" onClick={closeMenu}>
                <MenuNavLink to="/shopList/special">특별전</MenuNavLink>
              </li>
              <li className="text-white font-bold font-16 " onClick={closeMenu}>
                <MenuNavLink to="/shopList/women">여성</MenuNavLink>
              </li>
              <li className="text-white font-bold font-16 " onClick={closeMenu}>
                <MenuNavLink to="/shopList/men">남성</MenuNavLink>
              </li>
              <li className="text-white font-bold font-16 " onClick={closeMenu}>
                <MenuNavLink to="/shopList/family">가족</MenuNavLink>
              </li>
              <li
                className="text-white font-bold font-16 block md:hidden"
                onClick={closeMenu}
              >
                <MenuNavLink to="/Admin">Admin</MenuNavLink>
              </li>
            </ul>
          </BottomArea>
        </div>
      </NavbarArea>
      {/* <div
        style={
          location.pathname !== "/Admin"
            ? { height: "0" }
            : isMobile
            ? { height: "64px" }
            : { height: "130px" }
        }
      /> */}
      {location.pathname.startsWith("/Admin") ? null : (
        <FloatingButtonArea onClick={onClickCart}>
          <CartBadge itemCount={cartList.length} />
        </FloatingButtonArea>
      )}
    </>
  );
}

export default Navbar;
