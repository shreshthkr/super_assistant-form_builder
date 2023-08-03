const mongoose = quire("mongoose");


const categorizeSchema = mongoose.Schema({
    question: String,
    categories: [String],
    answer:String
}, {
    versionKey: false,
  });


  const categorizeModel = mongoose.model("Categorize", categorizeSchema);


  module.exports = {categorizeModel};

