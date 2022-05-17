const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect("mongodb://localhost/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = mongoose.connection;

connect.on("open", () => {
    console.log("mongodb connected sucessfully");
});


const booksRouter = require('./router/bookRouter');
app.use('/books', booksRouter);

app.use('/books/bookid', booksRouter);

app.use('/books/bookname', booksRouter);


app.listen(3000,()=>{
    console.log("Localhost started..")
});