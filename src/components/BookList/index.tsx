import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {getBooks, removeBook} from "../../slices/slices.ts";
import BookItem from "../BookItem";
import {useEffect} from "react";

const BookList = () => {
    const books = useSelector((state: RootState) => state.books);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch])

    const handleRemove = (id: string) => {
        dispatch(removeBook(id));
    }

    return (
        <ul>
            {books.map(book => (
                <BookItem key={book.id} book={book} onRemove={handleRemove}/>
            ))}
        </ul>
    )
}

export default BookList;