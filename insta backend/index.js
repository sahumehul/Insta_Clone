const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
const postRoute = require("./routes/post")
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("uploads"))
mongoose.connect("mongodb+srv://mehulmk9179:SQAGTBcrOXh8J5XW@cluster0.pbylivg.mongodb.net/assignment_10?retryWrites=true&w=majority").then(res=>{
    console.log("Connected to DB");
}).catch(err=>{
    console.log("Connection failed");
});

app.use("/",postRoute); 
app.listen(4000);