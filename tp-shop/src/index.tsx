import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import { initStore } from './services/store';
const store = initStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
