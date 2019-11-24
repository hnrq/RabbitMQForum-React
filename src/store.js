import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers";
import wsMiddleware from "middlewares/websocket";

const middleware = [thunk, wsMiddleware];

export default function configureStore(initialState = {}) {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  return createStore(rootReducer, enhancer);
}
