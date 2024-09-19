const initialState = {
  cartIsVisible: false,
  searchIsVisible: false,
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
    default:
      return state;
  }
};

export default modalReducer;
