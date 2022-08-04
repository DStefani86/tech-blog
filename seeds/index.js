const seedPosts = require('./seed-posts');
const seedUsers = require('./seed-users');
const seedComments = require('./seed-comments');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    await seedUsers ();
    await seedPosts ();
    await seedComments ();
};

seedAll();