const router = require('express').Router();
const apiRoutes = require('./api/')
const homeRoutes = require('./homeroutes');
const dashRoutes = require('./dashboard-routes');


router.use('/', homeRoutes);
router.use('/', dashRoutes);
router.use('/api', apiRoutes);

module.exports = router;