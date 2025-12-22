import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import {removeBook} from "../../slices/slices.ts";
import BookItem from "../BookItem";

const BookList = () => {
    const books = useSelector((state: RootState) => state.books);
    const dispatch = useDispatch();

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