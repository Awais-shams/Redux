import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../features/CakeShop'

const store=configureStore({
    reducer:{
        cake:cakeReducer
    }
})

export default store