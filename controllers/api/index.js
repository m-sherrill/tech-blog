const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const blogPostRoutes = require('./blogPostRoutes');

router.use('/blogs', blogPostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
