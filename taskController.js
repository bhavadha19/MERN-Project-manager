// const taskModel = require("./models/TaskModel");

// const createTask = async (req, res) => {
//     const { title, description } = req.body;
//     try {
//         const task = await taskModel.create({ title, description }); // Using 'task' instead of 'Task'
//         res.status(200).json(task); // Using 'task' instead of 'Task'
//     } catch (e) { // Corrected catch block variable
//         res.status(400).json({ error: e.message }); // Corrected JSON method name to 'json'
//     }
// };

// module.exports = {createTask};
//const taskModel = require("./models/TaskModel");
const TaskModel = require("../models/TaskModel");

const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await TaskModel.create({ title, description }); // Using 'taskModel' instead of 'Task'
        res.status(200).json(task); // Using 'task' instead of 'Task'
    } catch (e) {
        res.status(400).json({ error: e.message }); // Corrected JSON method name to 'json'
    }
};

module.exports = { createTask }; // Corrected 'exports' and removed semicolon
