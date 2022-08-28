const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req,res) => {
    res.send("Express is working???");
});


app.listen(3001, () => {
    console.log("app listening on port 3001");
});

