import {addBook, type TBook} from "../../slices/slices.ts";
import {useDispatch} from "react-redux";
import {type ChangeEvent, type FormEvent, useState} from "react";


const AddBookForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState<TBook>(
        {
            id: "",
            title: "",
            author: "",
        }
    )

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newBook = {
            id: crypto.randomUUID(),
            title: form.title,
            author: form.author,
        }

        dispatch(addBook(newBook));
        setForm({ title: "", author: "", id: ""} );
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{backgroundColor: form.author}}>
                <input type="text" name="title" value={form.title} onChange={handleChange} />
                <input type="text" name="author" value={form.author} onChange={handleChange} />
                <button type="submit">Добавить книгу</button>
            </form>
        </>
    )
}

export default AddBookForm;