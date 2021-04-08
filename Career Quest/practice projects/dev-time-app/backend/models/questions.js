const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = Schema({
    name: {
        Type: String,
        required: true
    },
    text: {
        Type: String,
        required: true
    },
    repo: {
        Type: String
    },
    live: {
        Type: String
    },
    answered: {
        Type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

module.exports = Question = mongoose.model('Question', QuestionSchema)