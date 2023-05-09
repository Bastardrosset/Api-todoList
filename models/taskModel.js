const mongoose = require('mongoose');
const validator = require('validator');

const TaskSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: [true, 'Please tell us your pseudo !'],
        minlength: [3, 'A pseudo must have more or equal then 3 characters'],
    },
    posterId: {
        type: String,
        required: [true, 'Please provide your email !'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    name: {
        type: String,
        required: [true, 'A task must have a name'],
        trim: true,
        maxlength: [40, 'A task name must have less or equal then 40 characters'],       
        minlength: [10, 'A task name must have more or equal then 10 characters'],      
    },
    description: {
        type: String
    },
    category:{
        type: String
    },
    priority: {
        type: Number,
        required: [true, 'A task needs priority'],
        default: 'Moyenne'
    },
    status: {
        type: Number,
        default: 'En attente'
    },
    deadline: [Date],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    update: {
        type: Date,
    }
}, {
    timestamps: true,
});

const ModelTask = mongoose.model('Task', TaskSchema);

module.exports = ModelTask;