import React, { useState } from "react";
import CartItemGrid from "./CartItemGrid";
import CartFooter from "./CartFooter";
import { useSelector } from "react-redux";
import leftArrow from "./arrow-left.png";

function Cart() {
  const cartList = useSelector((state) => state.cart.cartList);
  const cartSet = cartList.filter(
    (obj, index, self) => index === self.findIndex((o) => o.id === obj.id)
  );
  const itemNum = (nowItem) => {
    return cartList.filter((item) => item.name === nowItem.name).length;
  };
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div>
        {isVisible && (
          <div className="w-[500px] min-h-[1028px] h-auto bg-white/20 border border-white/30 backdrop-blur-[80px] flex flex-col items-center absolute right-0 max-md:left-1/2 max-md:-translate-x-1/2">
            <div className="text-white text-[32px] font-light font-['Pretendard'] leading-loose mt-9">
              장바구니
            </div>
            <div className="w-6 h-6 justify-center items-center inline-flex absolute top-[56px] left-[48px] cursor-pointer">
              <img
                src={leftArrow}
                alt="leftArrow"
                onClick={() => setIsVisible(false)}
              />
            </div>
            <div className="mt-9 space-y-5 mb-40">
              {cartList != []
                ? cartSet.map((item) => (
                    <CartItemGrid item={item} count={itemNum(item)} />
                  ))
                : ""}
            </div>
            <div className="fixed bottom-7">
              <CartFooter />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
