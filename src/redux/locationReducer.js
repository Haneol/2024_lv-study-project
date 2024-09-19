const DELETE = "delete";
const ADD = "post";

const initialState = {
  locationList: [
    {
      name: "루이비똥 메종 서울",
      phone: "010-1234-5678",
      address: "서울특별시 건대입구",
      latitude: "37.48322075935205",
      longitude: "126.91562063536725",
      image:
        "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--StFi_Louis_Vuitton_DAEJEON_GALLERIA_933_DI3.jpgwid%7BIMG_WIDTH%7D&hei%7BIMG_HEIGHT%7D?wid=490",
    },
    {
      name: "루이비똥 디지털",
      phone: "010-2222-3333",
      address: "서울특별시 가산 디지털단지 33434123-1233131241241",
      latitude: "37.47594146281152",
      longitude: "126.89933364425818",
      image:
        "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--StFi_Louis_Vuitton_SEOUL_SHINSEGAE_KANGNAM_781_2_DI3.jpgwid%7BIMG_WIDTH%7D&hei%7BIMG_HEIGHT%7D?wid=490",
    },
    {
      name: "루이비똥 메종 가산",
      phone: "010-4444-5555",
      address: "서울특별시 가산동 가산구 가산호 가산가산",
      latitude: "37.465454759280554",
      longitude: "126.90439426631131",
      image:
        "https://kr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--StFi_Louis_Vuitton_Jinghua_DI3.jpgwid%7BIMG_WIDTH%7D&hei%7BIMG_HEIGHT%7D?wid=490",
    },
  ],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      if (state.locationList.some((loc) => loc.name === action.payload.name)) {
        alert("이미 존재하는 매장입니다.");
        return state;
      } else {
        const arr = [...state.locationList, action.payload];
        return { ...state, locationList: arr };
      }
    case DELETE:
      const arr = state.locationList.filter(
        (loc) => loc.name !== action.payload
      );
      return { ...state, locationList: arr };
    default:
      return state;
  }
};

export default locationReducer;
