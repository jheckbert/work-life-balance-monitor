const express = require("express")

const taskListFile = __dirname + "/../data_model/taskList.json"
const benchmarkFile = __dirname + "/../data_model/benchmark.json"

const taskList = require(taskListFile)
const benchmark = require(benchmarkFile)

const taskListRouter = express.Router()
const helper = require("../helpers/helper")

taskListRouter
    .get("/", (req, res) => {
        res.send(taskList)
    })
    .post("/", (req, res) => {
        let lastStamp, task, BmClassification;
        if (taskList.length !== 0) {
            lastStamp = taskList[taskList.length - 1].time;
            BmClassification = taskList[taskList.length - 1].classification

            //Different in minutes
            const minutes = ((req.body.data.time - lastStamp) / 1000 / 60)

            //Add new task
            task = {
                time: req.body.data.time,
                message: req.body.data.message,
                classification: req.body.data.classification,
            }

            //Add duration to the previous task
            taskList[taskList.length - 1].duration = minutes

            if (BmClassification === "Work") {
                benchmark[0].Work += Number(minutes)
            } else if (BmClassification === "Family") {
                benchmark[0].Family += Number(minutes)
            } else if (BmClassification === "Exercise") {
                benchmark[0].Exercise += Number(minutes)
            } else if (BmClassification === "Personal") {
                benchmark[0].Personal += Number(minutes)
            }
        } else {
            task = {
                time: req.body.data.time,
                message: req.body.data.message,
                classification: req.body.data.classification
            }
        }

        taskList.push(task)

        helper.writeJSONFile(benchmarkFile, benchmark)
        helper.writeJSONFile(taskListFile, taskList)

        // res.send(taskList[taskList.length - 1])
        res.send(benchmark)
    })

module.exports = taskListRouter