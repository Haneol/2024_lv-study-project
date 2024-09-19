import React from "react";
import styled from "styled-components";

const FooterArea = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px 0px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
`;

function Footer() {
  return (
    <FooterArea>
      <div className="container mx-auto text-white font-16  px-3">
        {/* Top Area */}
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-4">
          <div className="flex gap-4 mb-5 md:mb-0 cursor-pointer">
            <p>배송지 : </p>
            <img src="images/kor.jpg" alt="" className="rounded-sm" />
            <p>대한민국</p>
          </div>
          <div className="flex gap-10">
            <p className="cursor-pointer">사이트 맵</p>
            <p className="cursor-pointer">법적고지</p>
            <p className="cursor-pointer">개인정보처리방침</p>
          </div>
        </div>
        {/* Middle Area */}
        <div className="hidden md:flex justify-between">
          <p className="font-light text-gray-100">
            This website showcases a fictional luxury brand inspired by high-end
            fashion. It is a non-commercial, educational project demonstrating
            web design and development skills.
          </p>
          <p className="font-light text-end text-gray-100">
            This site is not affiliated with Louis Vuitton, LVMH Group, or any
            existing luxury brand. All designs and layouts are original
            creations for demonstration purposes only.
          </p>
        </div>
        <div className="flex md:hidden flex-col items-center justify-center">
          <p className="font-light text-gray-100">Educational Project</p>
          <p className="font-light text-gray-100">
            Not affiliated with Louis Vuitton
          </p>
          <p className="font-light text-gray-100">Non-commercial use only</p>
        </div>
        {/* Bottom Area */}
        <div className="flex justify-center">
          <div className="absolute bottom-10">
            <img
              src="images/logo_text.png"
              alt=""
              width="200px"
              height="36px"
            />
          </div>
        </div>
      </div>
    </FooterArea>
  );
}

export default Footer;
