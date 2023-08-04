const mongoose = require("mongoose");


const comprehensionSchema = mongoose.Schema({
    passage: String,
    question: String,
    options: [String],
    answer: String
}, {
    versionKey: false,
  });


  const comprehensionModel = mongoose.model("Comprehension", comprehensionSchema);


  module.exports = {comprehensionModel};

