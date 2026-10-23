import mongoose from 'mongoose'

const bookSchema = mongoose.Schema(
    {
        BookName: {
            type: String,
            required: true
        },
        BookTitle: {
            type: String,
            required: true
        },
        BookAuthor: {
            type: String,
            required: true
        },
        BookSellingPrice: {
            type: Number,
            required: true
        },
        BookPublishDate: {
            type: String,
            required: true
        },
    },{timestamps: true}
)

const Book = mongoose.model('books', bookSchema);

export default Book;