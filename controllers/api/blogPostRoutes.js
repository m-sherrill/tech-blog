const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

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
  
  router.patch('/:id', async (req, res) => {
    try {
      const blogData = await Blog.update(req.body,
        {
          where: {
            id: req.params.id,
          },
        }
      )
      res.json(blogData);
    }
    catch (err) {
      console.log(err)
      res.status(500).json(err);
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

  module.exports = router
