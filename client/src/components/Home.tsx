import axios from 'axios';
import React, { useEffect, useState } from 'react'
import bookBaseUrl from '../../axiosInstance.tsx'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Home = () => {
    interface bookFormList{
        BookName: string,
        BookTitle: string,
        BookAuthor: string,
        BookSellingPrice: number,
        BookPublishDate: string
    }
    const [bookForm, setBookForm] = useState<bookFormList>({
        BookName: "",
        BookTitle: "",
        BookAuthor: "",
        BookSellingPrice: 0,
        BookPublishDate: ""
    });

    const [bookList, setBookList] = useState([])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setBookForm((prev) => ({
            ...prev,
            [name]: value
        }));
        // console.log("Name: ", name, "value: ", value)
    }

    const handleOnSubmit = async () => {
        try {
            const {data} = await bookBaseUrl.post('/add', bookForm);
            console.log("Data : ", data);
            if(data?.success){
                alert(data.message)
                setBookForm({
                    BookName: "",
                    BookTitle: "",
                    BookAuthor: "",
                    BookSellingPrice: 0,
                    BookPublishDate: ""
                })   
            }
            else{
                alert(data.message)
            }
        } catch (error) {
            alert(error)
        }
    }

    const handleGetBookList = async() => {
        try {
            const {data} = await bookBaseUrl.get("getAllBook");
            console.log(data.getAllBook);
            setBookList(data.getAllBook)
        } catch (error) {
            alert(error)
        }
    }

    const handleRemoveBookList = async(id: string) => {
        try {
            const {data} = await bookBaseUrl.delete(`/${id}`);
            if(data?.success){
                alert(data?.message)
                handleGetBookList();
            }   
        } catch (error) {
            alert(error)
        }
    }

    const handleUpdateBookList = async(id: string) => {
        try {
            const {data} = await bookBaseUrl.put(`/${id}`);
            alert(data?.message)
            handleGetBookList();
        } catch (error) {
            
        }
    }

    useEffect(() => {handleGetBookList()}, [])

    return (
        <div className="w-full px-5 min-h-[calc(100vh-60px)]">
            <form className="w-full grid grid-cols-5 gap-3 my-4">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Book Name</label>
                    <input type="text" placeholder="Book Name" onChange={handleOnChange} name="BookName" value={bookForm.BookName} className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2"/>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Book Title</label>
                    <input type="text" placeholder="Book Title" onChange={handleOnChange} name="BookTitle" value={bookForm.BookTitle} className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Author</label>
                    <input type="text" placeholder="Author" onChange={handleOnChange} name="BookAuthor" value={bookForm.BookAuthor} className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2"/>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Selling Price</label>
                    <input type="text" placeholder="Selling Price" onChange={handleOnChange} name="BookSellingPrice" value={bookForm.BookSellingPrice} className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2"/>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Publish Date</label>
                    <input type="date" placeholder="Selling Price" onChange={handleOnChange} name="BookPublishDate" value={bookForm.BookPublishDate} className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2"/>
                </div>
            </form>
            <div className="w-full flex justify-end">
                <button type='button' onClick={handleOnSubmit} className="bg-gray-700 text-white h-9 w-22 rounded-md"> SUBMIT </button>
            </div>

            <div className="w-full mt-10">
                <table className="w-full bg-white divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book Name</th>
                            <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book Title</th>
                            <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                            <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Selling Price</th>
                            <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Publish Date</th>
                            <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {bookList && bookList.length > 0 ?
                            (bookList.map((book, ind) => 
                                <tr key={ind} className="hover:bg-gray-200">
                                    <td className="px-6 py-3 whitespace-nowrap">{book.BookName}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{book.BookTitle}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{book.BookAuthor}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{book.BookSellingPrice}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{book.BookPublishDate}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <div className='w-20 flex justify-center gap-5'>
                                            <span onClick={() => {handleRemoveBookList(book._id)}} className='h-8 w-8 flex justify-center items-center bg-red-100 text-red-600 rounded text-lg cursor-pointer'>
                                                <MdDelete />
                                            </span>
                                            <span onClick={() => {handleUpdateBookList(book._id)}} className='h-8 w-8 flex justify-center items-center bg-green-100 text-green-600 rounded text-lg cursor-pointer'>
                                                <MdEdit />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            : (
                                <tr>
                                    <td className="px-6 py-3 whitespace-nowrap text-center" colSpan={6}>No Books Added</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home