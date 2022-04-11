const express = require("express");
const router = express.Router();
const Post = require("../models/blogbit");

router.post('/compose', async (req, res) => {
    db.collections(Post).insertOne(req.body, (err, data)=>{
        if (err) {
            console.log(err);
        } else{
            res.send('saved to db: ' + data);
        }
    })
})

module.exports = router;