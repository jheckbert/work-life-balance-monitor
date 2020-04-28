const express = require("express")
const benchmarkFile = __dirname + "/../data_model/benchmark.json"
const benchmark = require(benchmarkFile)
const benchmarkRouter = express.Router()

benchmarkRouter.get("/", (req, res) => {
    res.send(benchmark)
})

module.exports = benchmarkRouter