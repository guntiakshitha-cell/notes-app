const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/notesDB")
.then(()=>console.log("MongoDB Connected"));

const notesRoutes = require("./routes/notes");

app.use("/api/notes", notesRoutes);

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});