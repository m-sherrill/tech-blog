const seedBlog = require('./blogseeds');
const seedComment = require('./commentseeds');
const seedUser = require('./userseeds');


const sequelize = require('../config/connections');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlog();
  console.log('\n----- BLOG POSTS SEEDED -----\n');

  await seedComment();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
