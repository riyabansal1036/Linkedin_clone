import {applyMiddleware, legacy_createStore as createStore } from 'redux';
import  ThunkMiddleware   from 'redux-thunk';
import rootReducer from "../reducers/index"

// import rootReducer from "../reducers";
// const store= configureStore(rootReducer,{});
const store = createStore(rootReducer,applyMiddleware(ThunkMiddleware));
export default store;