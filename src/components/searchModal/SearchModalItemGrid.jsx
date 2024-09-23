import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchItemGridBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 28px;
  align-items: center;
  background-color: rgb(255 255 255 / 0.3);
  border-radius: 20px;
  border-width: 1px;
  border-color: rgb(255 255 255 / 0.3);
  cursor: pointer;
  transition: 0.2s;

  height: 120px;

  @media (min-width: 768px) {
    height: 180px;
  }

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
  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-full max-w-[815px] flex justify-end mb-4"
        onClick={(e) => {
          navigate(`/detail/${searchItem.item.id}`);
          dispatch({ type: "@modal/searchClose" });
          e.stopPropagation();
        }}
      >
        <SearchItemGridBox>
          <div className="h-full flex items-center">
            <img
              className="h-full"
              src={searchItem.item.img[490]}
              alt="itemImg"
            />
            <div className="flex flex-col items-start min-w-32 w-[160px] sm:w-80 md:w-[450px]">
              <div className="w-full truncate text-start text-[#4e3e2d] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Pretendard'] leading-tight mb-2">
                {searchItem.item.name}
              </div>
              <div className="text-start text-[#4e3e2d] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Pretendard'] leading-tight">
                {searchItem.item.price}
              </div>
            </div>
          </div>
          <div className="min-w-32 flex items-center justify-end h-full mt-[8px] hover:scale-100">
            <div
              className="mt-[8px] px-[40px] md:px-[60px] py-[16px] md:py-[24px] right-[48px] bg-black/20 hover:bg-black/30 hover:scale-105 hover:shadow-md duration-200 rounded-[100px] border border-white/30 justify-center items-center gap-2.5 inline-flex cursor-pointer"
              onClick={(e) => {
                dispatch({
                  type: "@cart/cartItemAdd",
                  payload: searchItem.item,
                });
                dispatch({ type: "@modal/addOpen" });
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <div className="justify-center items-center flex w-[24px]">
                <img src="/icons/shopping-cart.svg" alt="shopping" />
              </div>
            </div>
          </div>
        </SearchItemGridBox>
      </div>
    </>
  );
}

export default SearchModalItemGrid;
