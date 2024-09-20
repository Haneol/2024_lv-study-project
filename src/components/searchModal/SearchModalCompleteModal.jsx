import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchModalCompleteModal() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.modal.addIsVisible);
  const cartList = useSelector((state) => state.cart.cartList);
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch({ type: "@modal/addClose" });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, dispatch]);
  return (
    <>
      {isVisible && (
        <div className="z-[1007] fixed top-0 left-0 w-screen h-screen flex justify-center items-center ">
          <div className=" w-[500px] h-[380px] px-[166px] py-[86px] bg-black/20 rounded-[20px] backdrop-blur-[30px] justify-start items-center gap-2.5 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-[30px] inline-flex ">
              <div>
                <img
                  src="/icons/okay-circle.svg"
                  alt="okayCircle"
                  className="w-[141px] h-[141px] object-cover"
                />
              </div>
              <div className="text-center w-[450px]">
                <div className="w-full truncate text-white text-[32px] font-bold font-['Pretendard'] leading-[48px]">
                  {cartList.length === 0
                    ? ""
                    : cartList[cartList.length - 1].name}
                </div>
                <div className="truncate w-full text-white text-[32px] font-normal font-['Pretendard'] leading-[48px]">
                  이(가) <br />
                  장바구니에 담겼습니다!
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchModalCompleteModal;
