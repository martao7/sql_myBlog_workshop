import express from 'express';
import {
  getAllNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
} from '../controllers/notes.js';

const noteRouter = express.Router();

noteRouter.route('/').get(getAllNotes).post(createNote);

noteRouter.route('/:id').get(getNote).put(updateNote).delete(deleteNote);

export default noteRouter;
