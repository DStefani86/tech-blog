const { Post } = require('../models');

const postData = [
    {
        title: "Still the GOAT",
        post_content: "You can't argue with greatness.",
        user_id: 1
    },
    {
        title: "Back to Back???",
        post_content: "This squad can do it",
        user_id: 2
    },
    {
        title: "Tired of this",
        post_content: "Why Jeanie gotta argue w everything???",
        user_id: 3
    },
    {
        title: "Cant Sleep",
        post_content: "Up late thinking about what used to be",
        user_id: 4
    },
]

const userPosts = () => Post.bulkCreate(postData);

module.exports = userPosts;