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
    let k = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f03cebe013543198abee230ab815999")
    let j = await k.json()
    console.log(j);
   
   


    res.json(j)
  });


  module.exports = router;