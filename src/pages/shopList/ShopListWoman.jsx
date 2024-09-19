import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../../data";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Styledcontainer = styled.div`
  height: 550vh;
`;

const StyledmenuWrap = styled.div`
  height: 470vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

function ShopList() {
  const boxesRef = useRef([]);

  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        {
          scale: 1,
        },
        {
          scale: 0.8,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "200px top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <Styledcontainer>
      <div className="container mx-auto">
        <div className="my-32 mx-20 text-center md:text-left">
          <h1 className="text-3xl mb-5 font-bold">여성을 위한 선물</h1>
          <p>리버서블이 가능한 NEW 네버풀 인사이드 아웃 런칭을 기념하여</p>

          <p>
            해당 제품 온라인 구매자 대상으로 레더 택 증정 및 이니셜 각인
            서비스를 제공합니다.
          </p>

          <p>*해당 서비스는 한정 수량으로, 레더 택 소진 시까지 증정됩니다.</p>
        </div>

        <div className="menuWrap mx-auto p-4 w-full">
          <div className="flex flex-col">
            <StyledmenuWrap>
              <Box boxesRef={boxesRef} />
            </StyledmenuWrap>
          </div>
        </div>
      </div>
    </Styledcontainer>
  );
}

function Box({ boxesRef }) {
  return (
    <>
      {data.slice(57, 78).map((item, i) => {
        return (
          <Link
            key={i + 57}
            to={`/detail/${i + 57}`}
            ref={(el) => (boxesRef.current[i] = el)}
          >
            <div className="w-full md:w-auto md:h-auto bg-white bg-opacity-60 rounded-2xl flex justify-center items-end p-4 m-3 group hover:bg-opacity-100">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={item.img[600]}
                  className="w-96 object-contain transition-transform duration-300 group-hover:-translate-y-6"
                ></img>
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default ShopList;
