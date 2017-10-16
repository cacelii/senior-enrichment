'use strict'
const router = require('express').Router();
const db = require('../db');
const {Student} = require('../db/models');

//GET /api/students
router.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

router.get('/:studentId', (req, res, next) => {
	Student.findById(+req.params.studentId)
	.then(student => res.json(student))
	.catch(next);
})

router.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(student => res.json(student))
  .catch(next);
});

router.put('/:studentid', (req, res, next) => {
  const studentId = +req.params.studentId;
  Student.findById(studentId)
  .then(student => student.update(req.body))
  .catch(next);
});

router.delete('/:studentid', (req, res, next) => {
  const id = +req.params.studentId;
  Student.destroy({where: { id }})
  .then(() => res.sendStatus(204))
  .catch(next);
});

module.exports = router;
