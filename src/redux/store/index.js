import {combineReducers, legacy_createStore as createStore, compose, applyMiddleware} from "redux";
import { reducer } from "../reducer/countReducer";
import { colorReducer } from "../reducer/colorReducer";
import { logger, test } from "../midleware/logger";
import { authProses } from "../reducer/authReducer";
import thunk from "redux-thunk";
const allReducers = combineReducers({
    
    count:reducer,
    color : colorReducer,
    authProses: authProses
   });

  export const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

 export const store = createStore(allReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
 
//   export  const store = createStore(
//      allReducers, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//    );