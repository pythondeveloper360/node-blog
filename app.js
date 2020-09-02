const express = require("express");
const mysql = require("mysql");
const path = require('path')

const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "qsa-1299",
  database: "blog",
});

con.connect(function (err) {
  if (err) throw err;
});

app.use(express.static(path.join(__dirname,'public')))

app.get("/", function (req, res) {
  sql = con.query("select * from posts", function (error, result, feilds) {
    res.render("index.ejs", { post: result });
    // console.log(result[0].tittle);
    res.end();
  });
});

app.listen(3000);
