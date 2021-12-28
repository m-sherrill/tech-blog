const router = require('express').Router();
const { json } = require('express/lib/response');
const { Comment, User, Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['display_name'],
        },
      ],
    });
    const blogs = blogData.map(blog => blog.get({ plain: true }));
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogs/:id', async (req, res) => {
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

    res.render('blog', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newpost', withAuth, async (req, res) => {
  try {
    res.render('blog', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog, Comment }],
    });

    const users = userData.get({ plain: true });
    console.log(users)

    res.render('profile', {
      users,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;