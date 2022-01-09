const router = require('express').Router();
const commentRoutes = require('./commentRoutes.js');
const blogPostRoutes = require('./blogPostRoutes.js');
const userRoutes = require('./userRoutes.js')

router.use('/blogs', blogPostRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router
