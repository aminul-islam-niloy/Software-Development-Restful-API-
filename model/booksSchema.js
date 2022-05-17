const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    price:{
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true,

    }
});

module.exports= mongoose.model('Books',booksSchema);