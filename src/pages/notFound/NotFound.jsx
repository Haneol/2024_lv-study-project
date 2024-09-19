import React from "react";

function NotFound() {
  return (
    <>
      <div className="w-screen h-screen justify-center items-center flex flex-col  bg-black/20 backdrop-blur-[30px]">
        <div className="text-center text-white text-[64px] font-bold font-['Pretendard'] leading-normal">
          404
        </div>
        <div className="text-center text-white text-4xl font-normal font-['Pretendard'] leading-normal">
          페이지를 찾을 수 없어요 :(
        </div>
      </div>
    </>
  );
}

export default NotFound;
