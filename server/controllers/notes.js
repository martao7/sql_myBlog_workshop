import ErrorResponse from '../utils/ErrorResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import pool from '../db/server.js';

export const getAllNotes = asyncHandler(async (req, res, next) => {
  const results = await pool.query('SELECT * FROM notes');
  res.json(results.rows);
});

export const createNote = asyncHandler(async (req, res, next) => {
  const { titel, note, image_url, release_date } = req.body;
  const newEntry = await pool.query(
    'INSERT INTO notes (titel, note, image_url, release_date) VALUES($1, $2, $3, $4) RETURNING *',
    [titel, note, image_url, release_date]
  );
  res.status(201).json(newEntry.rows[0]);
});

export const getNote = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM notes WHERE id = $1', [id]);
  if (result.rows.length === 0) {
    return next(new ErrorResponse(`Post with id of ${id} doesn't exist`, 404));
  }
  res.json(result.rows[0]);
});

export const updateNote = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { titel, note, image_url, release_date } = req.body;
  const result = await pool.query(
    'UPDATE notes SET titel = $1, note = $2, image_url = $3, release_date = $4 WHERE id = $5 RETURNING *',
    [titel, note, image_url, release_date, id]
  );
  if (result.rows.length === 0) {
    return next(new ErrorResponse(`Post with id of ${id} doesn't exist`, 404));
  }
  res.json(result.rows[0]);
});

export const deleteNote = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const result = await pool.query(
    'DELETE FROM notes WHERE id = $1 RETURNING *',
    [id]
  );
  if (result.rows.length === 0) {
    return next(new ErrorResponse(`Note with id of ${id} doesn't exist`, 404));
  }
  res.json({ success: `Post with id of ${id} was deleted` });
});
