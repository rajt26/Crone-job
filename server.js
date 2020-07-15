const cron = require("node-cron")
const express = require("express")
const fs = require('fs')
const app = express()

cron.schedule("* * 11 * *", () => {
    console.log("Running Cron Job");
    fs.unlink("./error.log", err => {
        if (err) throw err;
        console.log("Error file successfully deleted");
    });
})

app.listen(3000)