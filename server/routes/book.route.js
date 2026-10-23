import express from 'express';
import {handleAddBook, handleGetAllBook, handleDeleteBook, handleEditBook} from '../controllers/book.controller.js';

const router = express.Router();

router.post('/add', handleAddBook);
router.get('/getAllBook', handleGetAllBook);
router.delete('/:id', handleDeleteBook);
router.put('/:id', handleEditBook);

export default router;