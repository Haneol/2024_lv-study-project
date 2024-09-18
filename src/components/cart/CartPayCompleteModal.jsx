import React, { useEffect } from "react";
import okayCircle from "./okay-circle.svg";

function CartPayCompleteModal({ isModalVisible, modalCloseTime }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      isModalVisible();
    }, modalCloseTime);
    return () => clearTimeout(timer);
  }, [isModalVisible, modalCloseTime]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center">
        <div className="w-[500px] h-[380px] bg-black/20 rounded-[20px] backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-[55px] inline-flex">
            <div>
              <img
                src={okayCircle}
                alt="okayCircle"
                className="w-[141px] h-[141px] object-cover"
              />
            </div>
            <div className="text-center text-white text-[40px] font-normal font-['Pretendard'] leading-normal">
              결제 완료!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPayCompleteModal;
