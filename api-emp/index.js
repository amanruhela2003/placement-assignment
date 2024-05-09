const express = require("express");
const app = express();
const connect = require("./connection");
const employee = require("./routes/employee");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(employee);

// app.use(user);
connect();

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is running 3000");
  }
});
