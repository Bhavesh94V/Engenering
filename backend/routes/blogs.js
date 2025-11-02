// import express from "express"
// import Blog from "../models/Blog.js"
// import { upload } from "../server.js"
// import { verifyToken } from "./auth.js"

// const router = express.Router()

// // Get all blogs
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 })
//     res.json(blogs)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })

// // Get single blog
// router.get("/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id)
//     if (!blog) return res.status(404).json({ error: "Blog not found" })
//     res.json(blog)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })

// // Create blog (admin only)
// router.post("/", verifyToken, upload.single("image"), async (req, res) => {
//   try {
//     const { title, excerpt, author, date, readTime, category, featured, content } = req.body

//     if (!title || !excerpt || !author || !date || !category || !req.file || !content) {
//       return res.status(400).json({ error: "Missing required fields" })
//     }

//     const blog = new Blog({
//       title,
//       excerpt,
//       author,
//       date,
//       readTime,
//       category,
//       imagePath: `/uploads/${req.file.filename}`,
//       featured: featured === "true",
//       content: JSON.parse(content),
//     })

//     await blog.save()
//     res.json(blog)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })

// // Update blog (admin only)
// router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
//   try {
//     const { title, excerpt, author, date, readTime, category, featured, content } = req.body

//     const updateData = {
//       title,
//       excerpt,
//       author,
//       date,
//       readTime,
//       category,
//       featured: featured === "true",
//       content: JSON.parse(content),
//       updatedAt: new Date(),
//     }

//     if (req.file) {
//       updateData.imagePath = `/uploads/${req.file.filename}`
//     }

//     const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true })
//     res.json(blog)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })

// // Delete blog (admin only)
// router.delete("/:id", verifyToken, async (req, res) => {
//   try {
//     await Blog.findByIdAndDelete(req.params.id)
//     res.json({ success: true, message: "Blog deleted" })
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })

// export default router




import express from "express"
import Blog from "../models/Blog.js"
import { upload } from "../config/uploadConfig.js" // ✅ FIXED import
import { verifyToken } from "./auth.js"

const router = express.Router()

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 })
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get single blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
    if (!blog) return res.status(404).json({ error: "Blog not found" })
    res.json(blog)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create blog (admin only)
router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, excerpt, author, date, readTime, category, featured, content } = req.body

    if (!title || !excerpt || !author || !date || !category || !req.file || !content) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    const blog = new Blog({
      title,
      excerpt,
      author,
      date,
      readTime,
      category,
      imagePath: `/uploads/${req.file.filename}`,
      featured: featured === "true",
      content: JSON.parse(content),
    })

    await blog.save()
    res.json(blog)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update blog (admin only)
router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, excerpt, author, date, readTime, category, featured, content } = req.body

    const updateData = {
      title,
      excerpt,
      author,
      date,
      readTime,
      category,
      featured: featured === "true",
      content: JSON.parse(content),
      updatedAt: new Date(),
    }

    if (req.file) {
      updateData.imagePath = `/uploads/${req.file.filename}`
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true })
    res.json(blog)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete blog (admin only)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: "Blog deleted" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
