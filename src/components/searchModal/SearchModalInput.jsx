import React, { useState } from "react";

function SearchModalInput({ onTextChange }) {
  const [text, setText] = useState("");
  const textChangeHandler = (e) => {
    onTextChange(e.target.value);
    setText(e.target.value);
  };
  return (
    <>
      <input
        name="searchInput"
        placeholder="Search"
        className="text-center outline-none bg-transparent text-white font-['Pretendard'] mr-4 w-full"
        onChange={textChangeHandler}
        value={text}
      />
    </>
  );
}

export default SearchModalInput;
