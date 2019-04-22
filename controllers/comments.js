const Comment = require("../models/comment");

exports.addComment = (req, res, next) => {
    const {comment} = req.body;
        Comment.create({
            comment
                })
                .then(comments => {
                    res.json(comments)
                    })
                    .catch(err => res.json({msg : "failed to create, error :err"}))
                    }

exports.getAllComments = (req, res, next) => {
    Comment.findAll()
        .then(comments => {
            res.json(comments)
                })
                .catch(err => res.json({msg : "failed to get comments"}))
                    }

exports.deleteComment = (req, res, next) => {
    //get the comment Id
    const CommentId = req.params.id;
        Comment.findByPk(CommentId)
            .then(comment => {
                comment.destroy()
                    .then(comment => {
                        res.json({msg: "successfully deleted"})
                            })
                            .catch(err => res.json({msg : "failed to delete comment"}))
                                 })
}