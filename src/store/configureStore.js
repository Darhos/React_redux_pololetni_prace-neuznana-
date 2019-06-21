import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import * as cisla from "./cisla";

export default function configureStore(initialState) {
  const middleware = [];
  const enhancers = [];
  const rootReducer = () =>
    combineReducers({
      cisla: cisla.reducer
    });

  return createStore(
    rootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
}
