import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./main-component/App/App";
import "./index.css";
import { Provider } from 'react-redux';
import store from "./store";


const loadingMarkup = <div className="py-4 text-center"></div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </React.StrictMode> */}
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
