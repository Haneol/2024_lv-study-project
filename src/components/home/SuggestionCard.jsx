import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const CardWrapper = styled.div`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible, inx }) => {
    if (!$isVisible) {
      switch (inx) {
        case 0:
          return "translateX(-50px)";
        case 1:
          return "translateY(-50px)";
        case 2:
          return "translateX(50px)";
        case 3:
          return "translateY(50px)";
        default:
          return "translateY(20px)";
      }
    }
    return "translate(0)";
  }};
  transition: opacity 1s ease-out, transform 1s ease-out;

  width: calc(100% - 40px);
  min-height: 20%;
  height: auto;

  @media (min-width: 768px) {
    width: calc(100% - 20px);
    min-height: 40%;
    height: auto;
  }
`;

const CardArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  ${(props) => `z-index: ${props.$zIndex};`}
  overflow: visible;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  ${({ inx }) => {
    const baseStyle = `
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      
    `;

    const hoverStyle = `
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.3);
      }
    `;

    switch (inx) {
      case 0:
        return `
          ${baseStyle}
          background: linear-gradient(128deg,
            rgba(255, 253, 246, 0.15) 15.65%,
            rgba(155, 249, 255, 0.15) 74.11%
          );
          ${hoverStyle}
          &:hover {
            background: linear-gradient(128deg,
              rgba(255, 253, 246, 0.25) 15.65%,
              rgba(155, 249, 255, 0.25) 74.11%
            );
          }
        `;
      case 1:
        return `
          ${baseStyle}
          background: linear-gradient(108deg,
            rgba(255, 253, 246, 0.15) 2.54%,
            rgba(255, 75, 172, 0.15) 96.4%
          );
          ${hoverStyle}
          &:hover {
            background: linear-gradient(108deg,
              rgba(255, 253, 246, 0.25) 2.54%,
              rgba(255, 75, 172, 0.25) 96.4%
            );
          }
        `;
      case 2:
        return `
          ${baseStyle}
          background: linear-gradient(72deg,
            rgba(255, 253, 246, 0.15) 3.04%,
            rgba(75, 180, 255, 0.15) 98.19%
          );
          ${hoverStyle}
          &:hover {
            background: linear-gradient(72deg,
              rgba(255, 253, 246, 0.25) 3.04%,
              rgba(75, 180, 255, 0.25) 98.19%
            );
          }
        `;
      case 3:
        return `
          ${baseStyle}
          background: linear-gradient(133deg,
            rgba(255, 253, 246, 0.15) 14.94%,
            rgba(208, 75, 255, 0.15) 80.08%
          );
          ${hoverStyle}
          &:hover {
            background: linear-gradient(133deg,
              rgba(255, 253, 246, 0.25) 14.94%,
              rgba(208, 75, 255, 0.25) 80.08%
            );
          }
        `;
      default:
        return `
          ${baseStyle}
          background: linear-gradient(128deg,
            rgba(255, 253, 246, 0.15) 15.65%,
            rgba(155, 249, 255, 0.15) 74.11%
          );
          ${hoverStyle}
          &:hover {
            background: linear-gradient(128deg,
              rgba(255, 253, 246, 0.25) 15.65%,
              rgba(155, 249, 255, 0.25) 74.11%
            );
          }
        `;
    }
  }}
`;

const FloatingImage = styled.img`
  position: absolute;
  width: 180px;
  height: auto;
  transition: all 0.3s ease-in-out;
  ${({ position }) => position}
  ${(props) => `z-index: ${props.$zIndex + 1};`}

  /* 모바일 */
  @media (max-width: 768px) {
    width: 120px;
    ${({ $mobilePosition, position }) => $mobilePosition || position}
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
  }

  @media (min-width: 1536px) {
    font-size: 36px;
  }
`;

const Description = styled.div`
  color: white;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  padding: 0 20px;
  font-weight: 200;

  @media (min-width: 640px) {
    font-size: 13px;
    line-height: 20px;
    font-weight: 300;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`;

function SuggestionCard({
  inx = 0,
  title,
  desc,
  imageSrc,
  imagePosition,
  imagemobilePosition,
  zIndex = 0,
  onClick,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const descLines = desc.split("<br>");

  return (
    <CardWrapper ref={ref} $isVisible={inView} inx={inx}>
      {imageSrc && (
        <FloatingImage
          src={imageSrc}
          alt={title}
          position={imagePosition}
          $mobilePosition={imagemobilePosition}
          $zIndex={zIndex}
        />
      )}
      <CardArea inx={inx} $zIndex={zIndex} onClick={onClick}>
        <Title>{title}</Title>
        <Description>
          {descLines.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </Description>
      </CardArea>
    </CardWrapper>
  );
}

export default SuggestionCard;
