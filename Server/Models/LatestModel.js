const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    info1: { type: String, required: true },
    info2: { type: String, required: true },
    info3: { type: String, required: true },
    info4: { type: String, required: true },
    img: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true },
    readTime: { type: String, required: true },
  },
  { collection: "news" }, 
);

module.exports = mongoose.model("Latest", newsSchema);