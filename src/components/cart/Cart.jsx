import React, { useEffect, useState } from "react";
import CartItemGrid from "./CartItemGrid";
import CartFooter from "./CartFooter";
import { useDispatch, useSelector } from "react-redux";
import CartPayCompleteModal from "./CartPayCompleteModal";
import { Scrollbars } from "react-custom-scrollbars-2";

function Cart() {
  const cartList = useSelector((state) => state.cart.cartList);
  const cartSet = cartList.filter(
    (obj, index, self) => index === self.findIndex((o) => o.id === obj.id)
  );
  const itemNum = (findingId) => {
    return cartList.filter((item) => item.id === findingId).length;
  };
  const [isOverflow, setIsOverflow] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const isCartVisible = useSelector((state) => state.modal.cartIsVisible);
  const [isAnimating, setIsAnimating] = useState(isCartVisible);
  const modalStyle = {
    transform: isAnimating ? "translateX(0)" : "translateX(100%)", // 애니메이션 효과
    transition: "transform 0.5s ease",
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCartVisible) {
      const cartContainer = document.querySelector(".cartContainer");
      const chkOverflow = (e) => {
        return e.scrollHeight > e.clientHeight;
      };
      setIsOverflow(chkOverflow(cartContainer));
      const handleResize = () => {
        setIsOverflow(chkOverflow(cartContainer));
      };
      window.addEventListener("resize", handleResize);
      setIsAnimating(true);
      return () => window.removeEventListener("resize", handleResize);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        return () => {
          clearTimeout(timer);
        };
      }, 1000);
    }
  }, [isCartVisible, setIsOverflow, cartList, isAnimating, dispatch]);

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: "4px",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <>
      <div className="fixed top-0 right-0 z-[1001]">
        <div
          className={
            "cartContainer overflow-y-auto fixed t-0 w-full md:w-[500px] h-auto max-h-svh min-h-svh bg-white/20 border border-white/30 backdrop-blur-[80px] flex flex-col items-center right-0"
          }
          style={modalStyle}
        >
          <div className="text-white text-[32px] font-light font-['Pretendard'] leading-loose mt-9">
            장바구니
          </div>
          <div
            className="w-8 h-8 justify-center items-center inline-flex absolute top-[54px] left-[48px] cursor-pointer"
            onClick={() => {
              dispatch({ type: "@modal/cartClose" });
            }}
          >
            <img src="/icons/arrow-left.svg" alt="leftArrow" />
          </div>
          <Scrollbars
            style={{ width: "100%", height: "calc(100vh - 260px)" }}
            renderThumbVertical={renderThumb}
            autoHide
          >
            <div className="flex flex-col justify-center items-center">
              <div className="mt-9 space-y-5 mb-20">
                {cartList.length !== 0
                  ? cartSet.map((i) => (
                      <CartItemGrid key={i.id} item={i} count={itemNum(i.id)} />
                    ))
                  : ""}
              </div>
            </div>
          </Scrollbars>
          {isOverflow ? (
            <div className=" bottom-7">
              <CartFooter isModalVisible={openModal} />
            </div>
          ) : (
            <div className="fixed bottom-7">
              <CartFooter isModalVisible={openModal} />
            </div>
          )}
        </div>
      </div>
      {isModalVisible && (
        <CartPayCompleteModal
          isModalVisible={closeModal}
          modalCloseTime={1000}
        />
      )}
    </>
  );
}

export default Cart;
