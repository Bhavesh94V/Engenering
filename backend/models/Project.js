import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true, enum: ["Commercial", "Industrial", "Infrastructure", "Residential", "Spiritual"] },
  location: { type: String, required: true },
  year: { type: String, required: true },
  imagePath: { type: String, required: true },
  gallery: [String],
  description: String,
  client: String,
  area: String,
  span: String,
  engineeringChallenges: { type: String, required: true },
  technicalSolutions: { type: String, required: true },
  results: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model("Project", projectSchema)
