import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data";

function Detail() {
  const { id } = useParams();
  const product = data[id];
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen">
      <div className="container mx-auto mb-5 py-5 lg:mt-32 lg:px-24 flex flex-col md:flex-row">
        <div className="z-[1100] h-auto bg-white bg-opacity-60 rounded-3xl flex flex-col xl:flex-row items-center relative">
          <img
            src={product.img[600]}
            className="scale-75 lg:scale-90 pb-10 object-contain"
          ></img>
          <button
            onClick={goBack}
            className="absolute top-8 right-10 bg-gray-500 hover:bg-gray-700 text-white text-lg font-bold py-2 px-4 rounded-full"
          >
            X
          </button>
          <div className="flex flex-col p-12 xl:w-1/2">
            <p className=" text-gray-800">{product.num}</p>
            <p className="name text-2xl mb-8 mt-6">{product.name}</p>
            <p className="text-gray-800">{product.text}</p>
            <p className="font-bold text-2xl mb-10 mt-8 text-center xl:text-start">
              {product.price}
            </p>
            <button className="bg-black bg-opacity-30 text-white rounded-full w-full h-16  hover:bg-gray-500">
              쇼핑백에 추가
            </button>
            <p className="text-xs text-gray-800 text-center mt-6">
              모든 제품 무료 배송 & 선물 포장 서비스 혜택
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
