import ShopActionTypes from "./shop.types";
import UserActionTypes from "../user/user.types";
import CartActionTypes from "../cart/cart.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
        errorMessage: null,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.SEND_ORDER_START:
      return {
        ...state,
        errorMessage: null,
        orderSent: false,
      };
    case ShopActionTypes.SEND_ORDER_SUCCESS:
      return {
        ...state,
        orderDetails: action.payload,
        errorMessage: null,
        orderSent: true,
      };
    case ShopActionTypes.SEND_ORDER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        orderSent: false,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        orderSent: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default shopReducer;
