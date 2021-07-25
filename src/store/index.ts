import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
declare global {  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer  = persistReducer(persistConfig, rootReducer)   
const store:any=createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor=persistStore(store)
export {store, persistor}
