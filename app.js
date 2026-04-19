const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const port = 4725;

// view engine
app.engine("handlebars", engine({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(express.static("public"));

// routes 
app.get("/", function(req, res){
    res.render("home");
})

// app.listen(port, function(req, res){
//     console.log(`server running in: http://localhost:${port}"`);
// });

module.exports = app;