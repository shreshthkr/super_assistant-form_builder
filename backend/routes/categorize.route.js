const mongoose= require("mongoose");
const express = require("express");

const categorizeRouter = express.Router();
const {categorizeModel} = require("../model/categorize.model");


categorizeRouter.post("/addquestion", async(req,res) => {
   try {
    const payload = new  categorizeModel(req.body);
    await payload.save();
    res.status(200).send({msg:"Question Added"})
   } catch (error) {
      res.status(400).send({msg:error.message})
   }
});

categorizeRouter.get("/", async(req,res) => {
    try {
      const questions = await categorizeModel.find();
      res.status(200).send(questions);
    } catch (error) {
      req.status(400).send({msg:error.message})
    }
});


module.exports = {categorizeRouter}