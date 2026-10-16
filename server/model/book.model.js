import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        BookName: {
            type: String,
            required: true,
        },
        BookTitle: {
            type: String,
            required: true,
        },
        Author: {
            type: String,
            required: true,
        },
        SellingPrice: {
            type: Number,
            required: true,
        },
        PublishDate: {
            type: Number,
            required: false,
        },
    },
    {timestamps: true}
);

const Book = mongoose.model("books", bookSchema)

export default Book;