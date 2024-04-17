import { configureStore } from "@reduxjs/toolkit"
import { persistStore,persistReducer } from "redux-persist" 
import storage from "redux-persist/lib/storage"
import enquiryReducer from "./enquirySlice"
import batchSliceReducer from "./batchSlice"
import invigilatorReducer from "./invigilatorSlice"



const store=configureStore({
    reducer:{
        enquiries:enquiryReducer,
        batch:batchSliceReducer,
        invigilator:invigilatorReducer
    }

})
export default store