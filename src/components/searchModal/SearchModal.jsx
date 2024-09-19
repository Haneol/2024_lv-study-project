import React, { useState } from "react";
import SearchModalItemGrid from "./SearchModalItemGrid";
import styled from "styled-components";
import SearchModalInput from "./SearchModalInput";
import searchIcon from "./search-normal.svg";
import data from "../../data";
import { useDispatch, useSelector } from "react-redux";

const SearchbarArea = styled.div`
  width: 360px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.3);
  }
`;

function SearchModal() {
  const [searchingData, setSearchingData] = useState([]);
  const isSearchModalVisible = useSelector(
    (state) => state.modal.searchIsVisible
  );
  const searchWithText = (text) => {
    const filteringData =
      text !== "" ? data.filter((item) => item.name.includes(text)) : [];
    setSearchingData(filteringData);
  };
  const dispatch = useDispatch();
  return (
    <>
      {isSearchModalVisible && (
        <div
          className="z-[1002] fixed top-0 w-full h-screen bg-black/20 backdrop-blur-[30px] overflow-y-auto justify-center items-center"
          onClick={() => {
            dispatch({ type: "@modal/searchClose" });
            setSearchingData([]);
          }}
        >
          <div
            className="w-fit mt-5  flex flex-col items-center m-auto"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SearchbarArea className="mb-[60px]">
              <img src={searchIcon} alt="search" className="mr-2" />
              <SearchModalInput onTextChange={searchWithText} />
            </SearchbarArea>
            {searchingData.map((item) => (
              <SearchModalItemGrid key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchModal;
