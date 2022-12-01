const express = require("express");
const router = express.Router();


router.get("/getnews",async(req, res) => {
    // try {
    //   const notes = await Notes.find({ user: req.user.id });
    //   res.json(notes);
    // } catch (error) {
    //   console.error(error.error);
    //   res.status(500).send("Internal Server Error");
    // }
    const {country,category,apiKey,page,pagesize} = req.query;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pagesize}`


    let k = await fetch(url)
    let j = await k.json()
    // console.log(j);
   
   


    res.json(j)
  });


  module.exports = router;