const initialState = {
  scrollPosition: 0,
};

const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCROLL_POSITION":
      return {
        ...state,
        scrollPosition: action.payload,
      };
    default:
      return state;
  }
};

export default scrollReducer;
