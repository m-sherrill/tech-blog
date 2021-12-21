const { Blog } = require('../models');

const blogData = [
  {
    title: 'Hello World Blog',
    content: 'This is a short blog post about saying hello to the world. So Hello, World! That is all. ',
    user_id: 1,
  },
  {
    title: 'Arrays are fun!',
    content: 'I just love manipulating Arrays! Learn more about how you can to in this blog post. ',
    user_id: 3,
  },
  {
    title: 'CSS is the greatest',
    content: 'CSS is super fun! I particularly like making flex boxes. But I did recently start getting good at grid and I may like that just as much',
    user_id: 2,
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;