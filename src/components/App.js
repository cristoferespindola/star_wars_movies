import React from "react";
import "./App.css";
import "./Movies/movies";
import Movies from "./Movies/movies";
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from "redux";
import movieReducer from "../reducer/movieReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

function configureStore() {
  return createStore(
    movieReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Movies />
  </Provider>
);

export default App;
