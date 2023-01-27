import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers/index";

export const initStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  return store;
};
