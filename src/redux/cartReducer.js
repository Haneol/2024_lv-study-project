import { useSelector } from "react-redux";

const initialState = {
  cartList: [
    {
      name: "네버풀 반둘리에 인사이드 아웃 BB (온라인 단독 레더택 증정)",
      num: "M12099",
      price: "₩3,550,000",
      tag: "여성",
      text: "출퇴근용뿐만 아니라 다양하게 활용하기 좋은 독특한 실루엣의 슬라우치 MM. 하우스의 상징적인 모노그램 캔버스 소재에 새로운 시그니처 패드락 네임 택 등 골드 색조의 하드웨어로 포인트를 준 우아한 디자인. 컴팩트한 지갑, 스마트폰, 13인치 노트북과 같이 업무 시 또는 주말에 필요한 소지품을 보관할 수 있는 넉넉한 수납공간.\n",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-네버풀-반둘리에-인사이드-아웃-bb-(온라인-단독-레더택-증정)--M12099_PM2_Front%20view.png?imwidth=4096",
      },
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@cart/cartItemAdd":
      console.log(action.payload, state.cartList);
      return { ...state, cartList: [...state.cartList, action.payload] };
    case "@cart/cartItemPop":
      const cartIdx = state.cartList.findIndex(
        (item) => item.name === action.payload.name
      );
      if (cartIdx !== -1) {
        return {
          ...state,
          cartList: [
            ...state.cartList.slice(0, cartIdx),
            ...state.cartList.slice(cartIdx + 1),
          ],
        };
      }
      return state;
    case "@cart/cartItemDelete":
      return {
        ...state,
        cartList: state.cartList.filter(
          (item) => item.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
