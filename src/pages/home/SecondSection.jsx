import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import SuggestionCard from "../../components/home/SuggestionCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SectionTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  & > div:nth-child(1),
  & > div:nth-child(3) {
    height: 2px;
    background: rgba(255, 255, 255, 0.5);
    transition: width 0.3s ease-out;
  }
  & > div:nth-child(1) {
    width: ${(props) => props.leftWidth}px;
  }
  & > div:nth-child(3) {
    width: ${(props) => props.rightWidth}px;
  }
  & > p {
    margin: 0 10px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;

    /* 데스크탑 스타일 */
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    justify-content: center;
    & > div:nth-child(1),
    & > div:nth-child(3) {
      width: ${(props) => props.mobileWidth}px;
    }
  }
`;

const NextSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
`;

const moveUpDownMobile = keyframes`
  0%, 100% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(15px);
  }
`;

const AnimatedImage = styled.img`
  /* 모바일 스타일 */
  animation: ${moveUpDownMobile} 2s ease-in-out infinite;

  /* 데스크톱 스타일 */
  @media (min-width: 768px) {
    animation: ${moveUpDown} 2s ease-in-out infinite;
  }
`;

function SecondSection() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [leftWidth, setLeftWidth] = useState(window.innerWidth / 16);
  const [rightWidth, setRightWidth] = useState(window.innerWidth / 40);
  const [mobileWidth, setMobileWidth] = useState(window.innerWidth / 16);

  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const threshold = window.innerHeight * 0.5;

    if (scrollPosition > threshold) {
      if (isMobile) {
        setMobileWidth(window.innerWidth / 4);
      } else {
        setLeftWidth(window.innerWidth / 16);
        setRightWidth(window.innerWidth / 5);
      }
    } else {
      if (isMobile) {
        setMobileWidth(window.innerWidth / 16);
      } else {
        setLeftWidth(window.innerWidth / 40);
        setRightWidth(window.innerWidth / 16);
      }
    }
  }, [isMobile, scrollPosition]);

  const toSpecialDetailPage = () => {
    navigate("/shopList/special");
  };

  const toWomenDetailPage = () => {
    navigate("/shopList/women");
  };

  const toMenDetailPage = () => {
    navigate("/shopList/men");
  };

  const toFamilyDetailPage = () => {
    navigate("/shopList/family");
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="container mx-auto h-full pt-20 pb-12 2xl:px-16">
        {/* Desktop */}
        <div className="hidden md:flex h-full min-h-80 justify-between">
          {/* Left */}
          <div className="w-1/2 h-full flex flex-col justify-between z-10">
            <SectionTitle
              leftWidth={leftWidth}
              rightWidth={rightWidth}
              mobileWidth={mobileWidth}
            >
              <div />
              <p>선물 제안</p>
              <div />
            </SectionTitle>
            <SuggestionCard
              title="여성을 위한 선물"
              desc="리버서블이 가능한 NEW 네버풀 인사이드 아웃 런칭을 기념하여
          해당 제품 온라인 구매자 대상으로 레더 택 증정 및 이니셜 각인 서비스를 제공합니다.<br>
          *해당 서비스는 한정 수량으로, 레더 택 소진 시까지 증정됩니다."
              imageSrc="images/item1.png"
              imagePosition="bottom: -110px; left: -60px;"
              zIndex={6}
              onClick={toWomenDetailPage}
            />
            <SuggestionCard
              inx={2}
              title="가족을 위한 선물"
              desc="루이 비통과 함께 사랑하는 가족에게 감사의 마음을 전하세요."
              imageSrc="images/item2.png"
              imagePosition="bottom: -40px; right: -110px;"
              zIndex={4}
              onClick={toFamilyDetailPage}
            />
          </div>
          {/* Right */}
          <div className="w-1/2 h-full flex flex-col items-end justify-between z-0">
            <SuggestionCard
              inx={1}
              title="추석선물 제안"
              desc="루이 비통과 함께 특별한 추석을 맞이하세요. ​구매 시 온라인 단독 스페셜 기프트를 드립니다.<br>
          일부 품목에 한하여 비비엔 레더 택과 추석 보자기 패키지가 제공됩니다."
              imageSrc="images/item0.png"
              imagePosition="top: -35px; left: -115px;"
              zIndex={3}
              onClick={toSpecialDetailPage}
            />
            <SuggestionCard
              inx={3}
              title="남성을 위한 선물"
              desc="데일리 패션에 포인트가 되어줄 감각적인 남성 선물 아이템을 만나보세요."
              imageSrc="images/item3.png"
              imagePosition="top: -125px; right: -35px;"
              zIndex={10}
              onClick={toMenDetailPage}
            />
            <NextSection>
              <AnimatedImage src="icons/arrow-down.svg" alt="v" />
              <p className="text-right font-20 font-light ms-3">매장 정보</p>
            </NextSection>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex md:hidden flex-col h-full min-h-80 justify-between items-center">
          <SectionTitle
            leftWidth={leftWidth}
            rightWidth={rightWidth}
            mobileWidth={mobileWidth}
          >
            <div />
            <p>선물 제안</p>
            <div />
          </SectionTitle>
          <SuggestionCard
            inx={1}
            title="추석선물 제안"
            desc="루이 비통과 함께 특별한 추석을 맞이하세요. ​구매 시 온라인 단독 스페셜 기프트를 드립니다.<br>
          일부 품목에 한하여 비비엔 레더 택과 추석 보자기 패키지가 제공됩니다."
            imageSrc="images/item0.png"
            imageMobilePosition="top: -50px; left: -40px;"
            onClick={toSpecialDetailPage}
          />
          <SuggestionCard
            title="여성을 위한 선물"
            desc="리버서블이 가능한 NEW 네버풀 인사이드 아웃 런칭을 기념하여
          해당 제품 온라인 구매자 대상으로 레더 택 증정 및 이니셜 각인 서비스를 제공합니다.<br>
          *해당 서비스는 한정 수량으로, 레더 택 소진 시까지 증정됩니다."
            imageSrc="images/item1.png"
            imageMobilePosition="top: 35px; right: -45px;"
            onClick={toWomenDetailPage}
          />
          <SuggestionCard
            inx={3}
            title="남성을 위한 선물"
            desc="데일리 패션에 포인트가 되어줄 감각적인 남성 선물 아이템을 만나보세요."
            imageSrc="images/item3.png"
            imageMobilePosition="top: 10px; left: -40px;"
            onClick={toMenDetailPage}
          />
          <SuggestionCard
            inx={2}
            title="가족을 위한 선물"
            desc="루이 비통과 함께 사랑하는 가족에게 감사의 마음을 전하세요."
            imageSrc="images/item2.png"
            imageMobilePosition="bottom: -20px; right: -20px;"
            onClick={toFamilyDetailPage}
          />
          <NextSection>
            <AnimatedImage src="icons/arrow-down.svg" alt="v" />
          </NextSection>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
