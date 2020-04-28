//Initialize server
const express = require("express")
const app = express();

// import data 
const timeData = require('./timeData.js');
const rateRange = require('./rateRange.js');

//Using CORS
const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.static("public"))

const taskList = require("./routes/taskList")
app.use("/tasks", taskList)

const benchmark = require("./routes/benchmark")
app.use("/benchmark", benchmark)

app.listen(5000, () => {
    console.log("Server is running on port:5000")
})
