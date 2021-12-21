const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all blog posts
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ['display_name'],
                    },
                ],
            });
        res.status(200).json(blogData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// Get all blog posts by User id
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['display_name'],
                },
            ],
        });
        res.status(200).json(blogData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;
