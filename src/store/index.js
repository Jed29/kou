import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        data : []
    }
})

export default store