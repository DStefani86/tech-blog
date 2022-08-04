const router = require('express').Router();

router.get('/signup', (req,res) => res.render('signup'));
router.get('/', (req,res) => res.render('homepage'));
router.get('/login', (req, res) => res.render('login'));

module.exports = router;