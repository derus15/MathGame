import {configureStore} from "@reduxjs/toolkit";
import interfaceReducer from "./interfaceSlice/interfaceSlice";

export const store = configureStore({
    reducer: {
        interface: interfaceReducer,
    },
})