import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./modules/index";

const middlewares = [ReduxThunk];

const isDev = process.env.NODE_ENV === "development";
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default configure;
