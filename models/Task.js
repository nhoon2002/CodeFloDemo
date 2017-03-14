var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({

    taskTitle: {
        type: String,
        unique: true
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task"
        }
    ],
    date: String
});

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
