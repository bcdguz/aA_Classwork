
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");
//route imports
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB succesfully"))
    .catch(err => console.log(err));

//body parser to parse json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//routes
app.get("/", (req, res) => res.send("HelloWorld"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));