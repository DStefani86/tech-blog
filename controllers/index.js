const router = require('express').Router();

router.use('/', require('./homeroutes'));
router.use('/api', apiRoutes);

module.exports = router;