import React from "react";
import styled from "styled-components";

const SearchbarArea = styled.div`
  width: 360px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
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

function Searchbar({ onClickSearchbar }) {
  return (
    <SearchbarArea onClick={onClickSearchbar}>
      <img src="icons/search.svg" alt="" />
      <p className="text-white font-20 font-light">search</p>
      <div style={{ width: "24px" }}></div>
    </SearchbarArea>
  );
}

export default Searchbar;
