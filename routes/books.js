var express = require('express');
var router = express.Router();
const db = require('../model/helper');

function makeWhereFromFilters(q) {
  let filters = [];
  if (q.name) {
    filters.push(`name = '${q.name}'`);
  }
  if (q.author) {
    filters.push(`author = '${q.author}'`);
  }
  if (q.rating) {
    filters.push(`author = ${q.rating}`);
  }
  if (q.current_book) {
    filters.push(`rating =< ${q.current_book}`);
  }

  return filters.join(' AND ');
}

router.get('/', async (req, res) => {
  let sql = 'SELECT * FROM books';
  let where = makeWhereFromFilters(req.query);
  if (where) {
    sql += ` WHERE ${where}`;
  }
  db(sql)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM books WHERE id = ${id}`;
  try {
    let result = await db(sql);
    if (result.data.length === 0) {
      res.status(404).send({ error: 'Book not found!' });
    } else {
      res.send(result.data[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  let { name, author, rating, year, cover, gr_URL } = req.body;
  let sql = `insert into books (name,author,rating,year,cover,gr_URL) values ('${name}', '${author}', ${rating}, '${year}', '${cover}', '${gr_URL}')`;

  try {
    await db(sql);
    let result = await db('select * from books');
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  let id = req.params.id;
  let { name, author, rating, year, cover, gr_URL } = req.body;
  let sqlCheckID = `SELECT * FROM books WHERE id = ${id}`;
  let sqlUpdate = `UPDATE bookclub SET name = ${rating} ,author = ${rating} ,rating = ${rating} ,year =${rating} ,cover = ${rating} ,gr_URL = ${rating}  WHERE id = ${id}`;

  try {
    let result = await db(sqlCheckID);
    if (result.data.length === 0) {
      res.status(404).send({ error: 'Book not found!' });
    } else {
      await db(sqlUpdate);
      let result = await db('select * from books');
      res.status(201).send(result.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
