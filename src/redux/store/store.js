import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
import { authProcess } from "../reducer/authReducer";
  
  let allReducers = combineReducers({
    auth: authProcess
  });
  
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
  export const store = legacy_createStore(
    allReducers,
    composeEnhancers(applyMiddleware(thunk))
  );