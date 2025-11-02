import mongoose from "mongoose"

const careerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  educationLevel: { type: String, required: true },
  coverLetter: { type: String, required: true },
  resumePath: { type: String, required: true },
  portfolioLink: String,
  status: { type: String, default: "Pending", enum: ["Pending", "Reviewed", "Shortlisted"] },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model("Career", careerSchema)
