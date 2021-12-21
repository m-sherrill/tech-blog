const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all blog posts
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ['display_name'],
                    },
                    {
                        model: Blog,
                        attributes: ['id'],
                    }
                ],
            });
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// Get all blog posts by User id
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const commentData = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['display_name'],
                },
                {
                    model: Blog,
                    attributes: ['id'],
                }
            ],
        });
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})



module.exports = router;
