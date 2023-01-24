import { combineReducers } from "redux";

import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
  } from "../actions";

const initialState = {
    itemsList: [],
    itemsRequest: false,
    itemsFailed: false,
  };

  export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ITEMS_REQUEST: {
        return {
          ...state,
          itemsRequest: true,
        };
      }
      case GET_ITEMS_SUCCESS: {
        return {
          ...state,
          itemsFailed: false,
          itemsList: [...action.itemsList],
          itemsRequest: false
        };
      }
      case GET_ITEMS_FAILED: {
        return { ...state, itemsFailed: true, itemsRequest: false };
      }

      default:
        return state;
    }
  };
  
  export const rootReducer = combineReducers({
    ingredients: DataReducer,
  });
  