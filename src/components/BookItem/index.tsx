import type {TBook} from "../../slices/slices.ts";

type BookItemProps = {
    book: TBook,
    onRemove: (id: string) => void
}


const BookItem = ({book, onRemove}: BookItemProps) => {
    return (
        <li>
            <span>{book.title} — {book.author}</span>
            <button onClick={() => onRemove(book.id)}>Удалить</button>
        </li>
    )
}

export default BookItem;