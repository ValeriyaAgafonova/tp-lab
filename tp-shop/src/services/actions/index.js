export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export const SORT_ITEMS_BY_NAME = "SORT_ITEMS_BY_NAME";
export const SORT_ITEMS_BY_VIEWS = "SORT_ITEMS_BY_VIEWS";
export const SORT_ITEMS_BY_START_DATE = "SORT_ITEMS_BY_START_DATE";
export const SORT_ITEMS_BY_END_DATE = "SORT_ITEMS_END_DATE";

export const REVERSE_ITEMS = 'REVERSE_ITEMS';
export const checkResponse = (response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка ${response.status}`);
    }
  };
  
  const getItemsRequest = () => {
    return fetch('products.json').then(checkResponse);
  };
  
  export function getItems() {
    return function (dispatch) {
      dispatch({
        type: GET_ITEMS_REQUEST,
      });
      getItemsRequest()
        .then((res) => {
          if (res) {
            dispatch({
              type: GET_ITEMS_SUCCESS,
              itemsList: res,
            });
            dispatch({
                type: SORT_ITEMS_BY_NAME
        })
          } else {
            throw new Error(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: GET_ITEMS_FAILED,
          });
          console.log(err)
        });
    };
  }