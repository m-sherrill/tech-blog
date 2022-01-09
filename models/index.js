const User = require('./User.js')
const Blog = require('./Blog.js')
const Comment = require('./Comment.js')


User.hasMany(Blog, {
    foreignKey: 'user_id',

});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
})

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Blog, Comment };