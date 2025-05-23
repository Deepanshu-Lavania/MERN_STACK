import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice.js";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({user:userReducer})

const persistConfig = {
  key: 'root',
  storage,
  version:1
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 


export const store = configureStore({
  reducer: persistedReducer,
  // disabling Redux Toolkit's serializability check
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store)
