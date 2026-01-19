import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-8">Книги</h1>
            <AddBookForm/>
            <BookList/>
        </>
    )
}

export default App
