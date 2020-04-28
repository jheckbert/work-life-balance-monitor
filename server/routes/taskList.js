const express = require("express")
const taskListFile = __dirname + "/../data_model/taskList.json"
const taskList = require(taskListFile)
const taskListRouter = express.Router()

taskListRouter.get("/", (req, res) => {
    res.send(taskList)
})

module.exports = taskListRouter