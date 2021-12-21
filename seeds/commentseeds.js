const { Comment } = require('../models');

const commentData = [
  {
    new_comment: 'I love arrays too!',
    blog_id: 2,
    user_id: 3,
  },
  {
    new_comment: 'I love saying hello to the world!',
    blog_id: 1,
    user_id: 1,
  },
  {
    new_comment: 'CSS is my favorite!',
    blog_id: 3,
    user_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;