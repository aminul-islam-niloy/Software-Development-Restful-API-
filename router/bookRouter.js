const express = require('express');
const router = express.Router();
const Books = require('../model/booksSchema');

router.post('/', async (req,res)=>{
    const books = new Books({
        name: req.body.name ,
        price: req.body.price,
        item: req.body.item,
       
    });
    try{
        const savedBooks = await books.save();
        res.json(savedBooks);
    }catch(err){
        res.json({message:err})
    } 
});

router.get('/', async (req,res)=>{
    try{
        const books = await Books.find();
        res.json(books);
    }catch(error){
        res.json({message:error});
    }

});


router.put('/:booksId', async (req, res)=>{
    try{
        const books = await Books.findById(req.params.booksId);
        books.name = req.body.name;
        books.price= req.body.price;
        books.item= req.body.item;
        
        const updateBooks = await books.save();
        res.json(updateBooks);
    }
    catch(err) {
        res.send(err.message);
        console.log(res.statusCode);
    }
})

router.delete(('/:booksId'), async (req, res)=>{
    try{
        const deleteBooks = await Books.findByIdAndDelete(req.params.booksId);
        res.send(" Deleted sucessfully ");
    }
    catch(err) {
        res.send(err.message);
    }
});

module.exports = router;