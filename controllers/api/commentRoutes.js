const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        console.log(req.body, "REQ.BODY")
        const newBlog = await Comment.create({
            new_comment: req.body.comment,
            blog_id: req.body.id,
            user_id: req.session.user_id,
        });
        console.log(newBlog)
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router
