import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer, filterReducer } from "./Reducer";
import { faker } from "@faker-js/faker";

const AppContext = createContext();

faker.seed(99);

const AppProvider = ({ children }) => {
  const catogories = [
    {
      "Featured Products": [],
    },
    {
      "Main catogories": [
        "Apparel",
        "Sport",
        "Accessories",
        "UnderWear",
        "Gifts",
        "SALE",
      ],
    },
  ];

  const destination = [
    { value: "australia", label: "Australia" },
    { value: "canada", label: "Strawberry" },
    { value: "china", label: "Vanilla" },
    { value: "hong kong", label: "Hong Kong" },
    { value: "japan", label: "Japan" },
    { value: "south korea", label: "South Korea" },
    { value: "macau", label: "Macau" },
    { value: "new zealand", label: "New Zealand" },
    { value: "taiwan", label: "Taiwan" },
    { value: "united states", label: "United States" },
  ];

  const deliveryMethods = [
    { value: "7-11 pickup", label: "7-11 Pickup" },
    { value: "family mart pickup", label: "Family Mart Pickup" },
    { value: "tcat delivery", label: "Tcat Delivery" },
  ];

  const paymentMethod = [
    { value: "line pay", label: "LINE pay" },
    { value: "credit card", label: "Credit Card" },
    { value: "bank transfer", label: "Bank Transfer" },
  ];
  const products = [...Array(99)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    material: faker.commerce.productMaterial(),
    sex: faker.name.sex(),
    category: catogories[1]["Main catogories"][Math.floor(Math.random() * 6)],
    isFeatured: faker.datatype.boolean(),
    price: faker.commerce.price(1000, 20000, 0),
    image: faker.image.image(640, 480, true),
    inStock: faker.datatype.number({ min: 0, max: 20 }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.datatype.number({ min: 1, max: 5 }),
  }));

  const initState = {
    products: products,
    cart: [],
    totalPrice: 0,
    totalQty: 0,
  };

  const initFilterState = {
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

  const [state, dispatch] = useReducer(reducer, initState);
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initFilterState
  );

  const [showTopOffCanvas, setShowTopOffCanvas] = useState(false);
  const [showLeftOffCanvas, setShowLeftOffCanvas] = useState(false);
  const [showRightOffCanvas, setShowRightOffCanvas] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [subtotals, setSubtotals] = useState({});
  const [showMenOptions, setShowMenOptions] = useState(false);
  const [showWomenOptions, setShowWomenOptions] = useState(false);
  const [destinationOption, setDestinationOption] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState(null);
  const [paymentOption, setPaymentOption] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  // cart functions
  const addToCart = (prod) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const changeCartQty = (id, newQty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: id,
        qty: newQty,
      },
    });
  };

  const getTotal = () => {
    dispatch({
      type: "GET_TOTAL",
    });
  };

  // filters function
  const filterBySex = (sex) => {
    filterDispatch({
      type: "FILTER_BY_SEX",
      payload: sex,
    });
  };

  const sortByPrice = (sort) => {
    filterDispatch({
      type: "SORT_BY_PRICE",
      payload: sort,
    });
  };

  const filterByStock = () => {
    filterDispatch({
      type: "FILTER_BY_STOCK",
    });
  };
  const filterByDelivery = () => {
    filterDispatch({
      type: "FILTER_BY_DELIVERY",
    });
  };
  const filterByFeatured = () => {
    filterDispatch({
      type: "FILTER_BY_FEATURED",
    });
  };

  const filterByRating = (rate) => {
    filterDispatch({
      type: "FILTER_BY_RATING",
      payload: rate,
    });
  };

  const filterByCategory = (category) => {
    filterDispatch({
      type: "FILTER_BY_CATEGORY",
      payload: category,
    });
  };

  const removeFilterByCategory = (category) => {
    filterDispatch({
      type: "REMOVE_FILTER_BY_CATEGORY",
      payload: category,
    });
  };

  const filterByMaterial = (material) => {
    filterDispatch({
      type: "FILTER_BY_MATERIAL",
      payload: material,
    });
  };

  const filterBySearch = (query) => {
    filterDispatch({
      type: "FILTER_BY_SEARCH",
      payload: query,
    });
  };

  const removeFilterByMaterial = (material) => {
    filterDispatch({
      type: "REMOVE_FILTER_BY_MATERIAL",
      payload: material,
    });
  };

  const clearFilter = () => {
    filterDispatch({
      type: "CLEAR_FILTERS",
    });
  };

  useEffect(() => {
    getTotal();
  }, [state.cart]);

  useEffect(() => {
    const subtotalsObj = {};
    state.cart?.forEach((prod) => {
      const { id, qty, price } = prod;
      subtotalsObj[id] = qty * price;
    });
    setSubtotals(subtotalsObj);
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        ...filterState,
        filterDispatch,
        showTopOffCanvas,
        setShowTopOffCanvas,
        showLeftOffCanvas,
        setShowLeftOffCanvas,
        showRightOffCanvas,
        setShowRightOffCanvas,
        hoveredIndex,
        setHoveredIndex,
        handleMouseEnter,
        handleMouseLeave,
        addToCart,
        removeFromCart,
        changeCartQty,
        subtotals,
        showMenOptions,
        setShowMenOptions,
        showWomenOptions,
        setShowWomenOptions,
        destination,
        deliveryMethods,
        paymentMethod,
        destinationOption,
        setDestinationOption,
        deliveryOption,
        setDeliveryOption,
        paymentOption,
        setPaymentOption,
        filterBySex,
        sortByPrice,
        filterByStock,
        filterByDelivery,
        filterByFeatured,
        filterByMaterial,
        removeFilterByMaterial,
        filterByCategory,
        removeFilterByCategory,
        clearFilter,
        filterByRating,
        filterBySearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
