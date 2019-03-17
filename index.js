import React from "react";
import ReactDOM from "react-dom";
import App from './src/App';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/store/reducer';
import thunk from 'redux-thunk';
import "./src/index.scss";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("sample-playlist-app")
);