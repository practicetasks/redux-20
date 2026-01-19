import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getBooks as apiGetBooks} from '../api/index.ts';

export type TBook = {
    id: string;
    title: string;
    author: string;
};

type TBooksState = {
    books: Array<TBook>;
    loading: boolean;
    error: string | null;
};

export const getBooks = createAsyncThunk(
    "books/getAll",
    async () => {
        return await apiGetBooks();
    }
)

const initialState: TBooksState = {
    books: [],
    loading: false,
    error: null
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state: TBooksState, action: PayloadAction<TBook>) => {
            state.books.push(action.payload);
        },
        removeBook: (state: TBooksState, action: PayloadAction<string>) => {
            state.books = state.books.filter(b => b.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(getBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка';
            })
    }
});

export const {addBook, removeBook} = bookSlice.actions;
export const reducer = bookSlice.reducer;

