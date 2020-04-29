const express = require("express")
const taskListFile = __dirname + "/../data_model/taskList.json"
const taskList = require(taskListFile)
const taskListRouter = express.Router()
const helper = require("../helpers/helper")

taskListRouter
    .get("/", (req, res) => {
        res.send(taskList)
    })
    .post("/", (req, res) => {
        let lastStamp, task;
        if (taskList.length !== 0) {
            lastStamp = taskList[taskList.length - 1].time;
            const minutes = (req.body.data.time - lastStamp) / 1000 / 60
            task = {
                time: req.body.data.time,
                classification: req.body.data.classification,
                message: req.body.data.message,
                timestamp: minutes
            }
        } else {
            task = {
                time: req.body.data.time,
                classification: req.body.data.classification,
                message: req.body.data.message
            }
        }

        taskList.push(task)
        helper.writeJSONFile(taskListFile, taskList)
        res.send(taskList[taskList.length - 1])
    })

module.exports = taskListRouter