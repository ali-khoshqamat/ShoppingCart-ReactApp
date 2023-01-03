import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
export default store;

