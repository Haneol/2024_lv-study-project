import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CartFooter({ isModalVisible }) {
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const priceSum =
    cartList.length !== 0
      ? cartList.reduce((sum, item) => {
          const numPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
          return sum + numPrice;
        }, 0)
      : 0;
  const clickCartPayButton = () => {
    dispatch({ type: "@cart/cartItemAllDelete" });
    dispatch({ type: "@modal/cartClose" });
    isModalVisible();
  };

  return (
    <div>
      {priceSum !== 0 ? (
        <div>
          <div className="text-center text-[#606060] text-base font-normal font-['Pretendard'] leading-normal">
            모든 제품 무료 배송 & 선물 포장 서비스 혜택
          </div>
          <div
            className="w-[400px] h-[87px]  py-[5px] bg-black/20 transition duration-200 hover:bg-black/40 rounded-[100px] border border-white/30 justify-center items-center gap-2.5 inline-flex cursor-pointer"
            onClick={clickCartPayButton}
          >
            <div className="text-center text-white text-xl font-normal font-['Pretendard'] leading-7 whitespace-nowrap">
              총 ₩{priceSum.toLocaleString()}원 구매하기
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[400px] h-[87px] py-[5px] bg-black/20 rounded-[100px] border border-white/30 justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-xl font-normal font-['Pretendard'] leading-7 whitespace-nowrap">
            장바구니가 비었어요!
          </div>
        </div>
      )}
    </div>
  );
}

export default CartFooter;
