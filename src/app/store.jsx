import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit'
import authSlice from '../features/authSlice'
import blogReducer from "../features/dataSlice"
import newsReducer from "../features/newsSlice"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'  //bise vermezsek local de verirsek session(storage)
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, authSlice)




const store = configureStore({
    reducer: {
        auth: persistedReducer,
        blog: blogReducer,
        news:newsReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    //hatayi kaldirdik
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})
export const persistor = persistStore(store)
export default store