import React, { useEffect, useRef, useState } from "react";
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
  const inputRef = useRef(null);
  const [placeHolder, setPlaceHolder] = useState("search");
  const textChangeHandler = (e) => {
    onTextChange(e.target.value);
    setText(e.target.value);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.blur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <SearchInput
        name="searchInput"
        ref={inputRef}
        placeholder={placeHolder}
        autoComplete="off"
        onChange={textChangeHandler}
        value={text}
        className="text-white placeholder-white "
        onClick={() => {
          setPlaceHolder("");
        }}
      />
    </>
  );
}

export default SearchModalInput;
