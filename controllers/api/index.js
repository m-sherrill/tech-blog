const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogs', blogPostRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router
