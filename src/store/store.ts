import bookReducer from "../slices/slices.ts";
import tracksReducer from "../slices/trackSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        books: bookReducer,
        tracks: tracksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;