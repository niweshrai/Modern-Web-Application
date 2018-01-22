const express = require('express');
const GradeManager = require('../entity/grades');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

let gradeManager = new GradeManager();
let router = express.Router();

let checkOperation = [
	check('id').exists(),
	check('name').exists(),
	check('course').exists(),
	check('grade').exists(),
  	check('id', 'Id : must be atleast one character').isLength({ min: 1 }),
  	check('name', 'Name : must be atleast one character').isLength({ min: 1 }),
  	check('course', 'Course : must be atleast one character').isLength({ min: 1 }),
  	check('grade', 'Grade : must be atleast one character').isLength({ min: 1 }),
  	sanitize('id').toInt()
];

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.status(200).json(gradeManager.getGrades());
});

router.post('/', checkOperation, function(req, res, next) {

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const gd = matchedData(req);
			let q = gradeManager.getGradesById(gd.id);

  			if(q != null) {
  				return res.status(422).json({ errors: "id already exists"});
  			}

	  		gradeManager.add(gd);
	  		res.status(200).json({"msg": "successful"});
	  	}
});

router.put('/', checkOperation, function(req, res, next) {
  	const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const gd = matchedData(req);
			let q = gradeManager.getGradesById(gd.id);

  			if(q == null) {
  				return res.status(422).json({ errors: "id is not present to modify"});
  			}

	  		gradeManager.modify(gd);
	  		res.status(200).json({"message": "done"});
	  	}
});

router.delete('/:id', function(req, res, next) {
	let id = req.params.id;
	let q = gradeManager.getGradesById(id);
	
	if(q == null) {
		return res.status(422).json({ errors: "id is not present to delete"});
	}

	gradeManager.remove(id);
  	res.status(200).json({"message": "done"});
});

module.exports = router;