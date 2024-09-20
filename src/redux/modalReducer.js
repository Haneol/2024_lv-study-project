const initialState = {
  cartIsVisible: false,
  searchIsVisible: false,
  addIsVisible: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@modal/cartOpen":
      return { ...state, cartIsVisible: true };
    case "@modal/cartClose":
      return { ...state, cartIsVisible: false };
    case "@modal/searchOpen":
      return { ...state, searchIsVisible: true };
    case "@modal/searchClose":
      return { ...state, searchIsVisible: false };
    case "@modal/addOpen":
      console.log("addOpen");
      return { ...state, addIsVisible: true };
    case "@modal/addClose":
      console.log("addClose");
      return { ...state, addIsVisible: false };
    default:
      return state;
  }
};

export default modalReducer;
