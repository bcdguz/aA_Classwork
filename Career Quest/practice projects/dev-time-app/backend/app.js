const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const questions = require('./routes/api/questions');

app.use(express.json()) //Parsing req and res into json format

mongoose    
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo connected"))
    .catch((err) => console.log(err))

app.use('/api/questions', questions)

app.get('/', (req, res) => res.send("This is working"));

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is serving on port ${port}`));