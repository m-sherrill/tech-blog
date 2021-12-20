const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const blogPostRoutes = require('./blogPostRoutes');

router.use('/blogPostRoutes', blogPostRoutes);
router.use('/commentRoutes', commentRoutes);

module.exports = router;
