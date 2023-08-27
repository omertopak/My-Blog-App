import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit'
import authSlice from '../features/authSlice'


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
    },
    devTools: process.env.NODE_ENV !== "production",
    //hatayi kaldirdik
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})
export const persistor = persistStore(store)
export default store