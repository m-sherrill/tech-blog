const seedBlog = require('./blogseeds');
const seedComment = require('./commentseeds');
const seedUser = require('./userseeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedBlog();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedComment();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
