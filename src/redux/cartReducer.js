import { useSelector } from "react-redux";

const initialState = {
  cartList: [
    {
      name: "키폴 50 반둘리에",
      num: "M41416",
      price: "₩3,570,000",
      tag: "추석",
      text: "1960년대의 닉낵 백에서 영감을 받아 곡선형 상단 디자인과 상징적인 타원형 트리밍 등 기존의 디테일로 전체적인 형태를 완성한 락킷 BB(Lockit BB). 모노그램 코팅 캔버스 소재. 다양하게 연출할 수 있는 활용도 높은 디자인. 하우스의 헤리티지에 오마주를 바치는 아이코닉한 패드락 잠금장치.",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-키폴-50-반둘리에--M41416_PM2_Front%20view.png?imwidth=4096",
      },
      id: 72,
    },
    {
      name: "포켓 오거나이저",
      num: "M41416",
      price: "₩680,000",
      tag: "추석",
      text: "하우스를 대표하는 두 가지 시그니처를 선보이는 LV 아이코닉 목걸이. 광택이 흐르는 핑크 색상의 에나멜 소재로 완성한 LV 이니셜 및 모노그램 플라워 디테일. 매우 가느다란 조절형 체인의 끝부분에 LV 서클 참을 구성하여 하우스 고유의 감성을 강조한 디자인. 단독으로 착용하여 독보적인 매력을 연출하거나 LV 아이코닉 귀걸이 또는 LV 크루 팔찌와 함께 스타일링할 수 있는 아이템.",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-포켓-오거나이저--M30283_PM2_Front%20view.png?imwidth=4096",
      },
      id: 73,
    },
    {
      name: "LV 블라종 스카프",
      num: "M41416",
      price: "₩800,000",
      tag: "추석",
      text: "출퇴근용뿐만 아니라 다양하게 활용하기 좋은 독특한 실루엣의 슬라우치 MM. 하우스의 상징적인 모노그램 캔버스 소재에 새로운 시그니처 패드락 네임 택 등 골드 색조의 하드웨어로 포인트를 준 우아한 디자인. 컴팩트한 지갑, 스마트폰, 13인치 노트북과 같이 업무 시 또는 주말에 필요한 소지품을 보관할 수 있는 넉넉한 수납공간.\n",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-블라종-스카프--M77269_PM2_Front%20view.png?imwidth=4096",
      },
      id: 74,
    },
    {
      name: "락커 돕 키트",
      num: "M41416",
      price: "₩1,490,000",
      tag: "추석",
      text: "1960년대의 닉낵 백에서 영감을 받아 곡선형 상단 디자인과 상징적인 타원형 트리밍 등 기존의 디테일로 전체적인 형태를 완성한 락킷 BB(Lockit BB). 모노그램 코팅 캔버스 소재. 다양하게 연출할 수 있는 활용도 높은 디자인. 하우스의 헤리티지에 오마주를 바치는 아이코닉한 패드락 잠금장치.",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83112_PM2_Front%20view.png?imwidth=4096",
      },
      id: 75,
    },
    {
      name: "트리오 토일렛 파우치",
      num: "M41416",
      price: "₩2,000,000",
      tag: "추석",
      text: "1960년대의 닉낵 백에서 영감을 받아 곡선형 상단 디자인과 상징적인 타원형 트리밍 등 기존의 디테일로 전체적인 형태를 완성한 락킷 BB(Lockit BB). 모노그램 코팅 캔버스 소재. 다양하게 연출할 수 있는 활용도 높은 디자인. 하우스의 헤리티지에 오마주를 바치는 아이코닉한 패드락 잠금장치.",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-트리오-토일렛-파우치--M47195_PM2_Front%20view.png?imwidth=4096",
      },
      id: 76,
    },
    {
      name: "리브 포쉐트",
      num: "M83301",
      price: "₩2,740,000",
      tag: "추석",
      text: "활용도가 높아 이상적인 선물이 되어줄 모노그램 컨피덴셜 방도. 모노그램 패턴 바탕에 가죽 스트랩, 체인, 패드락 등 하우스를 상징하는 모티프를 프린트한 실크 소재의 아이템. 목 또는 머리에 두르거나 루이 비통 백의 핸들에 장식할 수 있는 스타일리시한 액세서리.",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-리브-포쉐트--M83301_PM2_Front%20view.png?imwidth=4096",
      },
      id: 77,
    },
    {
      name: "디스트릭트 PM",
      num: "M46255",
      price: "₩2,640,000",
      tag: "추석",
      text: "하우스를 대표하는 두 가지 시그니처를 선보이는 LV 아이코닉 목걸이. 광택이 흐르는 핑크 색상의 에나멜 소재로 완성한 LV 이니셜 및 모노그램 플라워 디테일. 매우 가느다란 조절형 체인의 끝부분에 LV 서클 참을 구성하여 하우스 고유의 감성을 강조한 디자인. 단독으로 착용하여 독보적인 매력을 연출하거나 LV 아이코닉 귀걸이 또는 LV 크루 팔찌와 함께 스타일링할 수 있는 아이템.",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-디스트릭트-pm--M46255_PM2_Front%20view.png?imwidth=4096",
      },
      id: 78,
    },
    {
      name: "락커 돕 키트",
      num: "M46255",
      price: "₩1,490,000",
      tag: "추석",
      text: "1960년대의 닉낵 백에서 영감을 받아 곡선형 상단 디자인과 상징적인 타원형 트리밍 등 기존의 디테일로 전체적인 형태를 완성한 락킷 BB(Lockit BB). 모노그램 코팅 캔버스 소재. 다양하게 연출할 수 있는 활용도 높은 디자인. 하우스의 헤리티지에 오마주를 바치는 아이코닉한 패드락 잠금장치.",
      img: {
        490: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=490",
        600: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=600",
        730: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=730",
        1090: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=1090",
        1180: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=1180",
        1300: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=1300",
        1440: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=1440",
        2400: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=2400",
        4096: "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-락커-돕-키트--M83113_PM2_Front%20view.png?imwidth=4096",
      },
      id: 79,
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@cart/cartItemAdd":
      return { ...state, cartList: [...state.cartList, action.payload] };
    case "@cart/cartItemPop":
      const cartIdx = state.cartList.findIndex(
        (item) => item.id === action.payload.id
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
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
