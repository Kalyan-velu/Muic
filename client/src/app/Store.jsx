import { configureStore } from '@reduxjs/toolkit'
import { AuthReducer } from '../features/reducers/AuthReducers'
import { UserReducer } from '../features/reducers/UserReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
   key: 'root',
   storage,
}
const persistedReducer = persistReducer(persistConfig, AuthReducer)
export const store = configureStore({
   reducer: {
      auth: persistedReducer,
      user: UserReducer
   },
   middleware: [thunk]
})
export const persistor = persistStore(store)