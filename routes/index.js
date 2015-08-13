var express = require('express');
var router = express.Router();

/*____________________________*/
var quizController = require('../controllers/quiz_controller');
/*+++++++++++++++++++++++++*/

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/*obtiene las rutas de quiz_controller.js*/
router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);
module.exports = router;
