export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };
    case "CHANGE_CART_QTY":
      const { id, qty } = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: parseInt(qty),
            };
          }
          return item;
        }),
      };
    case "GET_TOTAL":
      let { totalPrice, totalQty } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;
          cartTotal.totalQty += qty;
          cartTotal.totalPrice += itemTotal;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQty: 0,
        }
      );
      totalPrice = parseFloat(totalPrice.toFixed(2));
      return {
        ...state,
        totalPrice,
        totalQty,
      };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEX":
      return { ...state, bySex: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      //change between true or false;
      //no need any information carried in payload
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      //change between true or false;
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_FEATURED":
      //change between true or false;
      return { ...state, byFeatured: !state.byFeatured };
    case "FILTER_BY_RATING":
      //onChange will fire dispatch and send the index of 'Star'
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, byCategory: [...state.byCategory, action.payload] };
    case "REMOVE_FILTER_BY_CATEGORY":
      return {
        ...state,
        byCategory: state.byCategory.filter((cat) => cat !== action.payload),
      };
    case "FILTER_BY_MATERIAL":
      return { ...state, byMaterial: [...state.byMaterial, action.payload] };
    case "REMOVE_FILTER_BY_MATERIAL":
      return {
        ...state,
        byMaterial: state.byMaterial.filter((mat) => mat !== action.payload),
      };
    case "CLEAR_FILTERS":
      return {
        sort: "",
        bySex: "",
        byStock: false,
        byFastDelivery: false,
        byFeatured: false,
        byRating: 0,
        searchQuery: "",
        byMaterial: "",
        byCategory: "",
      };
    default:
      return state;
  }
};
