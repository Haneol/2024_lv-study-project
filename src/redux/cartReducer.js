const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@cart/cartItemAdd":
      return { ...state, cartList: [...state.cartList, action.payload] };
    case "@cart/cartItemPop":
      const cartIdx = [...state.cartList]
        .reverse()
        .findIndex((item) => item.id === action.payload);
      const idx = state.cartList.length - cartIdx - 1;
      if (cartIdx !== -1) {
        return {
          ...state,
          cartList: [
            ...state.cartList.slice(0, idx),
            ...state.cartList.slice(idx + 1),
          ],
        };
      }
      return state;
    case "@cart/cartItemDelete":
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload),
      };
    case "@cart/cartItemAllDelete":
      return {
        ...state,
        cartList: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
