import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  {UserReducer} from './UserReducer'

const rootPersistConfig={
   key:'root',
   storage:storage,
   blacklist:['user']
}

const userPersistConfig={
   key:'user',
   storage:storage,
}

const rootReducer=combineReducers({
   auth:persistReducer(userPersistConfig,UserReducer)
})