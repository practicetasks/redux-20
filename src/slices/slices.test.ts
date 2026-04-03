import {describe, expect, it} from "vitest";
import {addBook, reducer, removeBook, getBooks, type TBook, type TBooksState} from "./slices.ts";

const initialState: TBooksState = {
    books: [],
    loading: false,
    error: null
};

const book1: TBook = {
    id: '1',
    title: 'some-title',
    author: 'some-author'
}

const book2: TBook = {
    id: '2',
    title: 'some-title2',
    author: 'some-author2'
}

describe('синхронные экшены', () => {
    it('должен вернуть изначальное состояние', () => {
        expect(reducer(undefined, {type: 'UNKNOWN'})).toEqual(initialState);
    });

    it('addBook – должен добавить книгу', () => {
        const state = reducer(initialState, addBook(book1));
        expect(state.books).toHaveLength(1);
        expect(state.books[0]).toEqual(book1);
    });

    it('addBook – должен добавить несколько книг', () => {
        let state = reducer(initialState, addBook(book1));
        state = reducer(state, addBook(book2));
        expect(state.books).toHaveLength(2);
    });

    it('removeBook – должен удалить одну книгу по id, в результате массив должен быть пустым', () => {
        const stateWithBooks = {...initialState, books: [book1]};
        const state = reducer(stateWithBooks, removeBook('1'));
        expect(state.books).toHaveLength(0);
    });

    it('removeBook – должен удалить одну книгу по id, в результате в массиве должна быть одна книга', () => {
        const stateWithBooks = {...initialState, books: [book1, book2]};
        const state = reducer(stateWithBooks, removeBook('1'));
        expect(state.books).toHaveLength(1);
        expect(state.books[0]).toEqual(book2);
    });

    it('removeBook – не должен удалить книгу из-за некорректного id', () => {
        const stateWithBooks = {...initialState, books: [book1]};
        const state = reducer(stateWithBooks, removeBook('999'));
        expect(state.books).toHaveLength(1);
    });
});

describe('асинхронные экшены', () => {
    it('getBooks.pending - должен установить loading: true', () => {
        const state = reducer(initialState, {type: getBooks.pending.type});
        expect(state.loading).toEqual(true)
    })

    it('getBooks.fulfilled - должен установить loading: false и записывать книги', () => {
        const books = [book1, book2];
        const state = reducer(
            {...initialState, loading: true},
            {type: getBooks.fulfilled.type, payload: books}
        );
        expect(state.loading).toEqual(false);
        expect(state.books).toEqual(books);
    });

    it('getBooks.rejected - должен установить loading: false и записывать ошибку', () => {
        const message = 'Internal Server Error';
        const state = reducer(
            {...initialState, loading: true},
            {type: getBooks.rejected.type, error: {message}}
        );
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(message);
    })

    it('getBooks.rejected - должен установить loading: false и записывать ошибку по умолчанию', () => {
        const state = reducer(
            {...initialState, loading: true},
            {type: getBooks.rejected.type, error: {}}
        );
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual('Ошибка');
    })
})

