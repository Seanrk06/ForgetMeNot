//jshint esversion:6

const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/html/homepage/index.html");
});

app.get("/todolist", function(req, res) {
    res.sendFile(__dirname + "/public/html/todolist/index.html");
});

app.get("/student", function(req, res) {
    res.sendFile(__dirname + "/public/html/dashboard/student.html");
});

app.get("/teacher", function(req, res) {
    res.sendFile(__dirname + "/public/html/dashboard/teacher.html");
});




app.listen(3500, function() {
    console.log("server is running on port 3500");
});

