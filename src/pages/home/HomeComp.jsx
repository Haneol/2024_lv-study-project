import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import SearchModal from "../../components/searchModal/SearchModal";
import Cart from "../../components/cart/Cart";

function HomeComp() {
  return (
    <div>
      <SearchModal />
      <Cart />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default HomeComp;
