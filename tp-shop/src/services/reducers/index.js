import { combineReducers } from "redux";

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  SORT_ITEMS_BY_NAME,
  SORT_ITEMS_BY_VIEWS,
  SORT_ITEMS_BY_START_DATE,
  SORT_ITEMS_BY_END_DATE,
  REVERSE_ITEMS,
  SEARCH_FILTER,
  CHANGE_LIST,
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
  itemsListFiltered: [],
  pageNumberStart: 0,
  pageNumberEnd: 4,
  pagesNumber: 1,
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
        itemsRequest: false,
        pagesNumber: Math.ceil([...action.itemsList].length / 4),
      };
    }
    case GET_ITEMS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    case SORT_ITEMS_BY_NAME: {
      const buffer = state.itemsList
        .filter((a) => a)
        .sort((a, b) => {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      return { ...state, itemsList: buffer, itemsListFiltered: buffer };
    }
    case SORT_ITEMS_BY_VIEWS: {
      const buffer = state.itemsList
        .filter((a) => a)
        .sort((a, b) => a.views - b.views);
      return { ...state, itemsList: buffer, itemsListFiltered: buffer };
    }
    case SORT_ITEMS_BY_START_DATE: {
      const buffer = state.itemsList
        .filter((a) => a)
        .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
      return { ...state, itemsList: buffer, itemsListFiltered: buffer };
    }
    case SORT_ITEMS_BY_END_DATE: {
      const buffer = state.itemsList
        .filter((a) => a)
        .sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
      return { ...state, itemsList: buffer, itemsListFiltered: buffer };
    }
    case REVERSE_ITEMS: {
      const buffer = state.itemsList.filter((a) => a).reverse();
      return { ...state, itemsList: buffer, itemsListFiltered: buffer };
    }
    case SEARCH_FILTER: {
      const buffer = state.itemsListFiltered.filter((a) =>
        a.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        itemsList: buffer,
        pagesNumber:
          Math.ceil(buffer.length / 4) === 0 ? 1 : Math.ceil(buffer.length / 4),
      };
    }
    case CHANGE_LIST: {
      return {
        ...state,
        pageNumberEnd: 4 * action.payload,
        pageNumberStart: action.payload * 4 - 4,
      };
    }

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  data: DataReducer,
});
