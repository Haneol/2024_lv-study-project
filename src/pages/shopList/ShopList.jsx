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
          <h1 className="text-3xl mb-5 font-bold">추석선물 제안</h1>
          <p>
            루이 비통과 함께 특별한 추석을 맞이하세요. ​구매 시 온라인 단독
            스페셜 기프트를 드립니다.
          </p>

          <p>
            ​일부 품목에 한하여 비비엔 레더 택과 추석 보자기 패키지가
            제공됩니다.
          </p>
        </div>

        <div className="menuWrap mx-auto p-4">
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
      {data.slice(20, 41).map((item, i) => {
        return (
          <Link
            key={i + 20}
            to={`/detail/${i + 20}`}
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
