import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  background-color: transparent;
  font-family: "Pretendard";
  margin-right: 16px;
  width: 100%;
  &::placeholder {
    font-weight: 300;
    font-size: 20px;
    text-indent: -1em;
  }
`;

function SearchModalInput({ onTextChange }) {
  const [text, setText] = useState("");
  const textChangeHandler = (e) => {
    onTextChange(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <SearchInput
        name="searchInput"
        placeholder="search"
        autoComplete="off"
        onChange={textChangeHandler}
        value={text}
        className="text-white placeholder-white "
      />
      {/* <input
        name="searchInput"
        placeholder="Search"
        className="text-center outline-none bg-transparent text-white font-['Pretendard'] mr-4 w-full placeholder-white"
        autoComplete="off"
        onChange={textChangeHandler}
        value={text}
      /> */}
    </>
  );
}

export default SearchModalInput;
