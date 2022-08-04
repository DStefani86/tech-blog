const { User } = require('../models');

const userData = [
    {
        username: "michael_jordan" , 
        password: "6rings!",
        email: "mj23@hotmail.com",
    },
    {
        username: "steph_curry" , 
        password: "@yesha!",
        email: "sc30@gmail.com",
    },
    {
        username: "lebron_james" , 
        password: "m!ck3y",
        email: "lakerfaker@yahoo.com",
    },
    {
        username: "kevin_durant" , 
        password: "b4bys0ft?",
        email: "takemeback@gmail.com",
    },
]
const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;