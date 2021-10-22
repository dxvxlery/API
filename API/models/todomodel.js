const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema(
    {
        idnomer: {
            type: Number,
            required: true,
            unique: true,
        },
        tododesc: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);




var conn2 = mongoose.createConnection(process.env.DB_URL);
module.exports = conn2.model('todolist', TodoListSchema);