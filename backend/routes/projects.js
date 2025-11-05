import express from "express"
import Project from "../models/Project.js"
import { upload } from "../config/uploadConfig.js"
import { verifyToken } from "./auth.js"

const router = express.Router()

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 })
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get single project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) return res.status(404).json({ error: "Project not found" })
    res.json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create project (admin only)
router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const {
      title,
      category,
      location,
      year,
      description,
      client,
      area,
      span,
      engineeringChallenges,
      technicalSolutions,
      results,
    } = req.body

    if (
      !title ||
      !category ||
      !location ||
      !year ||
      !engineeringChallenges ||
      !technicalSolutions ||
      !results ||
      !req.file
    ) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    const project = new Project({
      title,
      category,
      location,
      year,
      imagePath: `/uploads/${req.file.filename}`,
      description,
      client,
      area,
      span,
      engineeringChallenges,
      technicalSolutions,
      results,
    })

    await project.save()
    res.json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update project (admin only)
router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const {
      title,
      category,
      location,
      year,
      description,
      client,
      area,
      span,
      engineeringChallenges,
      technicalSolutions,
      results,
    } = req.body

    const updateData = {
      title,
      category,
      location,
      year,
      description,
      client,
      area,
      span,
      engineeringChallenges,
      technicalSolutions,
      results,
      updatedAt: new Date(),
    }

    if (req.file) {
      updateData.imagePath = `/uploads/${req.file.filename}`
    }

    const project = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true })
    res.json(project)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete project (admin only)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: "Project deleted" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
