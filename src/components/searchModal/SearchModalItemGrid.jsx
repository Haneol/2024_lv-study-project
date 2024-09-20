import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const SearchItemGridBox = styled.div`
  width: 845px;
  height: 180px;
  left: 0px;
  top: 17px;
  position: absolute;
  background-color: rgb(255 255 255 / 0.3);
  border-radius: 20px;
  border-width: 1px;
  border-color: rgb(255 255 255 / 0.3);
  cursor: pointer;
  transition: 0.2s;

  &:active {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.3);
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.3);
  }
`;

function SearchModalItemGrid(searchItem) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="w-[845px] h-[197px] relative flex justify-end"
        onClick={() => {
          console.log("gotoDetail");
        }}
      >
        <SearchItemGridBox>
          <img
            className="w-[185.85px] h-[180px] left-[31px]  absolute "
            src={searchItem.item.img[490]}
            alt="itemImg"
          />
          <div className=" w-[345px] h-[72px] left-[233px] top-[54px] absolute">
            <div className="w-full truncate left-0 top-0 absolute text-start text-[#4e3e2d] text-2xl font-normal font-['Pretendard'] leading-loose">
              {searchItem.item.name}
            </div>
            <div className="left-0 top-[40px] absolute text-center text-[#4e3e2d] text-2xl font-normal font-['Pretendard'] leading-loose">
              {searchItem.item.price}
            </div>
          </div>
        </SearchItemGridBox>
        <div className="flex items-center h-full mt-[8px] w-[240px] hover:scale-100">
          <div
            className="px-[60px] py-[24px] right-[48px] absolute bg-black/20 hover:bg-black/30 hover:scale-105 hover:shadow-md duration-200 rounded-[100px] border border-white/30 justify-center items-center gap-2.5 inline-flex cursor-pointer"
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
                <img src="icons/shopping-cart.svg" alt="shopping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchModalItemGrid;
