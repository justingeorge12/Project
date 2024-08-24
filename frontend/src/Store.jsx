import { configureStore } from "@reduxjs/toolkit";
import counterreducer from './redux/counterSlice'

const store = configureStore({
    reducer : {
        counter : counterreducer
    }
})

export default store