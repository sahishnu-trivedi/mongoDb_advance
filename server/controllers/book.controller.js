import Book from '../model/book.model.js';

export const handleAddBook = async(req, res) => {
    try {
        const body = req.body;
        if (!body.BookName || !body.BookTitle || !body.BookAuthor || !body.BookSellingPrice || !body.BookPublishDate){
            return res.json({success: false, message: "Fields not added"})
        }
        const addBook = await Book.create(req.body);
        res.json({success: true, message: "Field Created Successfully", data: addBook})
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const handleGetAllBook = async(req, res) => {
    try {
        const getAllBook = await Book.find({});
        console.log(getAllBook);
        res.json({success: true, getAllBook});
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const handleDeleteBook = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteBookId = await Book.findByIdAndDelete(id);
        if(!deleteBookId){
            res.json({success: false, message: "Book does not exist"})
        }
        const newBookList = await Book.find({})
        res.json({success: true, message: "Book deleted successfully", newBookList})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const handleEditBook = async(req, res) => {
    try {
        const {id} = req.params;
        const updateBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        const updatedBookList = await Book.find({});
        res.json({success: true, message: "Book updated successfully", updatedBookList})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// export default {handleAddBook, handleGetAllBook};