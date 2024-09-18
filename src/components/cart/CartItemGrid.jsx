import React from "react";
import addSquare from "./add-square.png";
import minusSquare from "./minus-square.png";
import xSquare from "./Group 46.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import cartReducer from "../../redux/cartReducer";

let plusMinusButton = styled.div`
  width: 6px;
  height: 6px;
  position: relative;
  cursor: pointer;
`;

function CartItemGrid(cartItem) {
  const dispatch = useDispatch();
  return (
    <div className="w-[400px] h-[179px] relative">
      <div className="w-[400px] h-[179px] left-0 top-0 absolute bg-white/30 rounded-[20px] border border-white/30" />
      <div className="w-[356.04px] h-[162px] left-[25px] top-0 absolute">
        <div className="w-3 h-3 left-[344px] top-[20px] absolute cursor-pointer">
          <img
            src={xSquare}
            alt="xSquare"
            onClick={() => {
              dispatch({
                type: "@cart/cartItemDelete",
                payload: cartItem.item,
              });
            }}
          />
        </div>
        <div className="w-[247px] h-[120px] left-0 top-0 absolute">
          <img
            className="w-[120px] h-[120px] left-0 top-0 absolute"
            src={cartItem.item.img[490]}
            alt="cartItemImg"
          />
          <div className="w-[150px] h-[61px] left-[137px] top-[39px] absolute">
            <div className="truncate w-full left-0 top-0 absolute text-[#4e3e2d] text-2xl font-normal font-['Pretendard'] leading-loose">
              {cartItem.item.name}
            </div>
            <div className="left-0 top-[37px] absolute text-[#808080] text-base font-normal font-['Pretendard'] leading-normal">
              {cartItem.item.num}
            </div>
          </div>
        </div>
        <div className="w-[347px] h-8 left-[9px] top-[130px] absolute">
          <div className="left-[228px] top-[2px] absolute text-right text-neutral-700 text-xl font-bold font-['Pretendard'] leading-7">
            {cartItem.item.price}
          </div>
          <div className="w-[99px] h-8 relative">
            <div className="w-[99px] h-8 left-0 top-0 absolute">
              <div className="w-6 h-6 left-[75px] top-[4px] absolute justify-center items-center inline-flex cursor-pointer">
                <div className="plusMinusButton">
                  <img
                    src={addSquare}
                    alt="addSquare"
                    onClick={() => {
                      dispatch({
                        type: "@cart/cartItemAdd",
                        payload: cartItem.item,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="w-6 h-6 left-0 top-[4px] absolute justify-center items-center inline-flex cursor-pointer">
                <div className="plusMinusButton">
                  <img
                    src={minusSquare}
                    alt="minusSquare"
                    onClick={() => {
                      dispatch({
                        type: "@cart/cartItemPop",
                        payload: cartItem.item,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="w-10 h-8 left-[30px] top-0 absolute bg-white/30 rounded-[5px] border border-white/30" />
            </div>
            <div className="left-[46px] top-[4px] absolute text-center text-neutral-700 text-base font-normal font-['Pretendard'] leading-normal">
              {cartItem.count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemGrid;
