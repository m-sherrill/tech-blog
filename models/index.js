const User = require('./User')
const Blog = require('./Blog')
const Comment = require('./Comment')


// Products belongsTo Category
Blog.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  // Categories have many Products
 User.hasMany(Blog, {
    foreignKey: 'user_id',
  });
  
  // Products belongToMany Tags (through ProductTag)
  Blog.belongsToMany(Comment, {
    through: {
      model: ProductTag,
      foreignKey: 'blog_tag'
    },
  });
  
  // Tags belongToMany Products (through ProductTag)
  Tag.belongsToMany(Product, {
    through: {
      model: ProductTag,
      foreignKey: 'product_id'
    }
  })
module.exports = { User, Blog, Comment };