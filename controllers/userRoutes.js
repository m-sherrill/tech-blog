const router = require('express').Router();
const { Comment, User, Blog } = require('../models');
const withAuth = require('../utils/auth');

// this is the path from within the dashboard for users to update their personal blog posts!!

router.get('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['display_name'],
          },
        ],
      });
  
      const blogs = blogData.get({ plain: true });
  
      res.render('userblog', {
        blogs,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router