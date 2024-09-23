import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const DetailArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Detail() {
  const { id } = useParams();
  const product = data[id];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showMessage, setShowMessage] = useState(false);

  const goBack = () => {
    navigate(-1);
  };

  const addToCart = () => {
    dispatch({
      type: "@cart/cartItemAdd",
      payload: product,
    });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  return (
    <div>
      <DetailArea>
        <div className="container mx-auto 2xl:px-16 px-4 mt-[75px] md:mt-[160px]">
          <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-3xl flex flex-col md:flex-row items-center relative">
            <div className="w-full md:w-1/2 h-[40%] md:h-full p-4 flex items-center justify-center">
              <img
                src={product.img[600]}
                alt={product.name}
                className="w-full h-[38vh] md:h-[68vh] object-contain"
              />
            </div>
            <button
              onClick={goBack}
              className="absolute top-4 right-4 bg-gray-500 hover:bg-gray-700 text-white text-lg font-bold py-2 px-4 rounded-full transition-all duration-300"
            >
              X
            </button>
            <div className="w-full md:w-1/2 h-[60%] md:h-full flex flex-col p-4 md:p-8 justify-between">
              <div>
                <p className="text-gray-800 text-[clamp(0.8rem,1.5vw,1rem)]">
                  {product.num}
                </p>
                <p className="name text-[clamp(1.2rem,2.5vw,2rem)] mb-2 md:mb-4 mt-2">
                  {product.name}
                </p>
                <p className="text-gray-800 text-[clamp(0.8rem,1.5vw,1rem)] mb-2 md:mb-4">
                  {product.text}
                </p>
              </div>
              <div>
                <p className="font-bold text-[clamp(1.2rem,2.5vw,2rem)] mb-4 md:mb-6 text-center md:text-start">
                  {product.price}
                </p>
                <button
                  onClick={addToCart}
                  className="bg-black bg-opacity-30 text-white rounded-full w-full py-3 md:py-4 hover:bg-opacity-50 transition-all duration-300 text-[clamp(0.9rem,1.8vw,1.1rem)]"
                >
                  쇼핑백에 추가
                </button>
                <p className="text-[clamp(0.6rem,1.2vw,0.75rem)] text-gray-800 text-center mt-2">
                  모든 제품 무료 배송 & 선물 포장 서비스 혜택
                </p>
              </div>
            </div>
          </div>
        </div>
        {showMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white px-6 py-4 rounded-lg z-50 backdrop-filter backdrop-blur-sm">
            장바구니에 상품이 담겼습니다 !
          </div>
        )}
      </DetailArea>
    </div>
  );
}

export default Detail;
