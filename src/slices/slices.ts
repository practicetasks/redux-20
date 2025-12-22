import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type TBook = {
    id: string;
    title: string;
    author: string;
};

type TBooksState = {
    books: Array<TBook>;
};

const initialState: TBooksState = {
    books: [
        {id: '1', title: 'книга1', author: 'автор1'},
        {id: '2', title: 'книга2', author: 'автор1'},
        {id: '3', title: 'книга3', author: 'автор1'},
        {id: '4', title: 'книга4', author: 'автор1'},
        {id: '5', title: 'книга5', author: 'автор1'},
    ]
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
    }
});

export const { addBook, removeBook } = bookSlice.actions;
export const reducer = bookSlice.reducer;

//AddBookForm