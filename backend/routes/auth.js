import express from "express"
import jwt from "jsonwebtoken"
import Admin from "../models/Admin.js"

const router = express.Router()

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password required" })
    }

    const admin = await Admin.findOne({ username })
    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    const isPasswordValid = await admin.comparePassword(password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET || "your-secret-key", {
      expiresIn: "24h",
    })

    res.json({
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        avatarPath: admin.avatarPath,
      },
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Verify token middleware
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res.status(401).json({ error: "No token provided" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key")
    req.admin = decoded
    next()
  } catch (error) {
    res.status(401).json({ error: "Invalid token" })
  }
}

// TEMP: Create admin (only for first time setup)
router.post("/create-admin", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if admin exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const admin = new Admin({ username, password, email });
    await admin.save();

    res.json({ success: true, message: "Admin created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router
