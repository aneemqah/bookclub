var express = require('express');
var router = express.Router();
const db = require('../model/helper');

function makeWhereFromFilters(q) {
  let filters = [];

  if (q.name) {
    filters.push(`name = '${q.name}'`);
  }
  if (q.num_members) {
    filters.push(`num_members = '${q.num_members}'`);
  }
  if (q.current_book) {
    filters.push(`current_book = '${q.current_book}'`);
  }

  return filters.join(' AND ');
}

router.get('/', async (req, res) => {
  let sql = 'SELECT * FROM bookclub';
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
  let sql = `SELECT * FROM bookclub WHERE id = ${id}`;

  try {
    let result = await db(sql);
    if (result.data.length === 0) {
      res.status(404).send({ error: 'Bookclub not found!' });
    } else {
      res.send(result.data[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  let { name, category, num_members, current_book } = req.body;
  let sql = `insert into bookclub (name, category, num_members, current_book) values ('${name}', '${category}', ${num_members}, ${current_book})`;

  try {
    await db(sql);
    let result = await db('select * from bookclub');
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  let id = req.params.id;
  let { name, category, num_members, current_book } = req.body;
  let sqlCheckID = `SELECT * FROM bookclub WHERE id = ${id}`;
  let sqlUpdate = `UPDATE bookclub SET name = '${name}', category = '${category}', num_members = ${num_members}, current_book = ${current_book}  WHERE id = ${id}`;

  try {
    let result = await db(sqlCheckID);
    if (result.data.length === 0) {
      res.status(404).send({ error: 'Bookclub not found!' });
    } else {
      await db(sqlUpdate);
      let result = await db('select * from bookclub');
      res.status(201).send(result.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  let id = req.params.id;
  let { name, category, num_members, current_book } = req.body;
  let sqlCheckID = `SELECT * FROM bookclub WHERE id = ${id}`;
  let sqlUpdate = `UPDATE bookclub SET name = '${name}' WHERE id = ${id}`;

  try {
    let result = await db(sqlCheckID);
    if (result.data.length === 0) {
      res.status(404).send({ error: 'Bookclub not found!' });
    } else {
      await db(sqlUpdate);
      let result = await db('select * from bookclub');
      res.status(201).send(result.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  let sqlCheckID = `SELECT * FROM bookclub WHERE id = ${id}`;
  let sqlDelete = `DELETE FROM bookclub WHERE id = ${id}`;
  try {
    let result = await db(sqlCheckID);
    if (result.data.length === 0) {
      res.status(404).send({ error: 'Bookclub not found!' });
    } else {
      await db(sqlDelete);
      let result = await db('select * from bookclub');
      res.status(201).send(result.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
