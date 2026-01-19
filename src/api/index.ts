import type {TBook} from "../slices/slices.ts";

const mockData: TBook[] = [
    {id: '1', title: 'книга1', author: 'автор1'},
    {id: '2', title: 'книга2', author: 'автор1'},
    {id: '3', title: 'книга3', author: 'автор1'},
    {id: '4', title: 'книга4', author: 'автор1'},
    {id: '5', title: 'книга5', author: 'автор1'},
]

export const getBooks = async () => {
    return new Promise<TBook[]>((resolve) => {
        setTimeout(() => {
            resolve(mockData);
        }, 2000);
    })
}