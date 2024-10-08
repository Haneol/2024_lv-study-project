import React, { useEffect } from "react";
import AnimatedCheckmark from "./AnimatedCheckmark";

function CartPayCompleteModal({ isModalVisible, modalCloseTime }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      isModalVisible();
    }, modalCloseTime);
    return () => clearTimeout(timer);
  }, [isModalVisible, modalCloseTime]);

  return (
    <>
      <div className="z-[1007] fixed top-0 left-0 w-full h-screen flex justify-center items-center">
        <div className="w-[300px] h-[240px] md:w-[500px] md:h-[380px] bg-black/20 rounded-[20px] backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-[55px] inline-flex">
            <div>
              <AnimatedCheckmark />
              {/* <img
                src="/icons/okay-circle.svg"
                alt="okayCircle"
                className="w-[91px] h-[91px] md:w-[141px] md:h-[141px]"
              /> */}
            </div>
            <div className="text-center text-white text-[24px] md:text-[40px] font-normal font-['Pretendard'] leading-normal">
              결제 완료!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPayCompleteModal;
