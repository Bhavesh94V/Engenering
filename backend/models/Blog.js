import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  readTime: String,
  category: { type: String, required: true },
  imagePath: { type: String, required: true },
  featured: { type: Boolean, default: false },
  content: [
    {
      type: { type: String, enum: ["intro", "section"], required: true },
      heading: String,
      text: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model("Blog", blogSchema)
