import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";

let myInterceptorRequest = axios.interceptors.request.use(
  req => {
    console.log("request", req);
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);
//remove interceptor
// axios.interceptors.request.eject(myInterceptorRequest);

let myInterceptorResponse = axios.interceptors.response.use(
  res => {
    console.log("res", res);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);
// remove interceptor
// axios.interceptors.request.eject(myInterceptorResponse);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
