import { combineReducers } from "redux";

import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
    SORT_ITEMS_BY_NAME,
    SORT_ITEMS_BY_VIEWS,
    SORT_ITEMS_BY_START_DATE,
    SORT_ITEMS_BY_END_DATE,
    REVERSE_ITEMS
  } from "../actions";

//   interface ICard {
//     image_url: string;
//     logo_url: string;
//     name: string;
//     category: string;
//     views: number;
//     start_date: string;
//     end_date: string;
//     discount: string;
//     stars: number;
//     old_price: string;
//     new_price: string;
//     disclaimer?: string;
//   }

//   interface IData {
//     itemsRequest: boolean;
//     itemsFailed: boolean;
//     itemsList: ICard[];
//   }

//  interface IAction {
//     type: string;
// itemsList?: ICard[];
//   }

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
      case SORT_ITEMS_BY_NAME: {
        return { ...state, itemsList: state.itemsList.filter(a => a).sort((a, b) => {
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB)
              return -1
            if (nameA > nameB)
              return 1
            return 0 
            })};
      }
      case SORT_ITEMS_BY_VIEWS: {
        return { ...state, itemsList: state.itemsList.filter(a => a).sort((a, b) =>  a.views - b.views )};
      }
      case SORT_ITEMS_BY_START_DATE: {
        return { ...state, itemsList: state.itemsList.filter(a => a).sort((a, b) => new Date(a.start_date) - new Date(b.start_date))};
      }
      case SORT_ITEMS_BY_END_DATE: {
        return { ...state, itemsList: state.itemsList.filter(a => a).sort((a, b) =>  new Date(a.end_date) - new Date(b.end_date)
  )};
      }
      case REVERSE_ITEMS: {
        return { ...state, itemsList: state.itemsList.filter(a => a).reverse()};
      }

      default:
        return state;
    }
  };
  
  export const rootReducer = combineReducers({
    data: DataReducer,
  });
  