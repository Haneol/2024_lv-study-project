import React from "react";
import shoppingIcon from "./shopping-cart.svg";
import { useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

function SearchModalItemGrid(searchItem) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="w-[845px] h-[197px] relative"
        onClick={() => {
          console.log("gotoDetail");
        }}
      >
        <div className="w-[845px] h-[180px] left-0 top-[17px] absolute bg-white/30 rounded-[20px] border border-white/30" />
        <img
          className="w-[185.85px] h-[180px] left-[31px] top-0 absolute "
          src={searchItem.item.img[490]}
          alt="itemImg"
        />
        <div className=" w-[345px] h-[72px] left-[233px] top-[71px] absolute ">
          <div className="w-full truncate left-0 top-0 absolute text-start text-[#4e3e2d] text-2xl font-normal font-['Pretendard'] leading-loose">
            {searchItem.item.name}
          </div>
          <div className="left-0 top-[40px] absolute text-center text-[#4e3e2d] text-2xl font-normal font-['Pretendard'] leading-loose">
            {searchItem.item.price}
          </div>
        </div>
        <div
          className="w-[122px] h-[73px] py-[5px] right-[48px] top-[71px] absolute bg-black/20 rounded-[100px] border border-white/30 justify-center items-center gap-2.5 inline-flex cursor-pointer"
          onClick={(e) => {
            dispatch({
              type: "@cart/cartItemAdd",
              payload: searchItem.item,
            });
            e.stopPropagation();
          }}
        >
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
              <img src={shoppingIcon} alt="shopping" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchModalItemGrid;
