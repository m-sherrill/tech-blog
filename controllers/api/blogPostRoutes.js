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

router.post('/', async (req, res) => {
    try {
      const newBlog = await Blog.create({
         title: req.body.blogTitle,
         content: req.body.blogContent,
        user_id: req.session.user_id,
      });
      console.log(newBlog)
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No blog found with this ID' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
