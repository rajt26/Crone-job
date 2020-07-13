const cron = require("node-cron")
const express = require("express")
const fs = require('fs')
const app = express()

const deleteFile = async () => {
    fs.unlink("./error.log", err => {
        if (err) throw err;
        console.log("Error file successfully deleted");
    });

}
cron.schedule("58 28 11 * * *", () => {
    // console.log("running task every minute");
    console.log("Running Cron Job");
    deleteFile()
})
// console.log(task)

app.listen(3000)