const mongoose= require("mongoose");
const express = require("express");

const comprehensionRouter = express.Router();
const {comprehensionModel} = require("../model/comprehension.model");


comprehensionRouter.post("/addquestion", async(req,res) => {
   try {
    const payload = new  comprehensionModel(req.body);
    await payload.save();
    res.status(200).send({msg:"Question Added"})
   } catch (error) {
      res.status(400).send({msg:error.message})
   }
});

comprehensionRouter.get("/", async(req,res) => {
    try {
      const questions = await comprehensionModel.find();
      res.status(200).send(questions);
    } catch (error) {
      req.status(400).send({msg:error.message})
    }
});

comprehensionRouter.delete("/:id", async (req, res) => {
  const questionId = req.params;
  try {
    const question = await comprehensionModel.findByIdAndDelete({_id:questionId});
    
    res.status(200).send({ msg: "Question deleted successfully" });
  }  catch (err) {
    res.send({ "msg": err.message })
}
});
module.exports = {comprehensionRouter}