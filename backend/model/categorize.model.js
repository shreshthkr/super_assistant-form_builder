const mongoose = require("mongoose");


const categorizeSchema = mongoose.Schema({
    question: String,
    categories: [String],
    item: [String],
    
}, {
    versionKey: false,
  });


  const categorizeModel = mongoose.model("Categorize", categorizeSchema);


  module.exports = {categorizeModel};

