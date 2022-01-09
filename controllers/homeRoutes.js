const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../utils/auth');


// Homepage route -- displays the blogs, date created, and the user who published it 
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
        include: [{model: User,
          attributes: ['display_name'], exclude: ['password'] }, {model: Comment, 
          include: [
            {
              model: User,
              attributes: ['display_name']
            }],
        }],
    });
    const blogs = blogData.map(blog => blog.get({ plain: true }));
    console.log(blogs)
    res.render('homepage', { 
     blogs: blogs, 
    logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog, 
      include: [{model: User,
      attributes: ["display_name"] }], }]
    });

    const users = userData.get({ plain: true });
    console.log(users.blogs)
    res.render('profile', {
      users: users,
      blogs: users.blogs,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// login page!
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


// Use withAuth middleware to prevent access to route -- dashboard -- only showing what the user created!
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id,{
        include: [{model: User,
          attributes: ['display_name'], exclude: ['password'] }, {model: Comment, 
          include: [
            {
              model: User,
              attributes: ['display_name']
            }],
        }],
    });
    const blogs = blogData.get({ plain: true });
    console.log(blogs)
    res.render('blog', { 
    blogs: blogs, 
    logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



module.exports = router