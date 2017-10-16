'use strict'
const router = require('express').Router();
const db = require('../db');
const {Campus, Student} = require('../db/models');

//GET /api/campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});

router.get('/:campusId', (req, res, next) => {
	Campus.findById(+req.params.campusId)
	.then(campus => res.json(campus))
	.catch(next);
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(campus => res.json(campus))
  .catch(next);
});

router.put('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campus.findById(campusId)
  .then(campus => campus.update(req.body))
  .catch(next);
});

router.delete('/:campusId', (req, res, next) => {
  const id = +req.params.campusId;
  Campus.destroy({where: { id }})
  .then(() => res.sendStatus(204))
  .catch(next);
});


//?
router.get('/:campusId/students', (req, res, next) => {
  const campusId = +req.params.campusId;
  Student.findAll({where: { campusId }})
  .then(students => res.json(students))
  .catch(next);
});

module.exports = router;
