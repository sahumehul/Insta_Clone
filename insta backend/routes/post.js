const express = require("express");
const postRoute = express.Router();
const Post = require("../model/post");
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"uploads")
    },
    filename: (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage});

postRoute.post("/post",upload.single('image'),(req,res)=>{
    const {name,location,likes,description} = req.body;
    const posts = new Post({
        name,
        location,
        likes,
        description,
        PostImage : req.file.filename ,
        Date: new Date().toDateString()
    })

    posts.save().then(result=>{
        res.status(200).json({
            message: "post saved!!!",
            data : result
        })
    }).catch(err=>{
        res.status(400).json({
            message : "Something went wrong",
            error : err
        })
    })
})

postRoute.get("/getPost",(req,res)=>{
    Post.find().then(posts=>{
        res.status(200).json({
            message : "Post fetched successfully",
            data : posts
        })
    }).catch(err=>{
        res.status(500).json({
            message : "Failed to retrieve data",
            errdesc : err
        })
    })
})

module.exports = postRoute;