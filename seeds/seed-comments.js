const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_content: "Trying to be like you!"
    },
]

const userComments = () => Comment.bulkCreate(commentData);

module.exports = userComments;