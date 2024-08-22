
import {configureStore} from '@reduxjs/toolkit'

const Store = configureStore({
    reducer : {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware() ,
    devTools : true
})


export default Store