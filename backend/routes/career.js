// import express from "express"
// import Career from "../models/Career.js"
// import { upload, transporter } from "../server.js"

// const router = express.Router()

// // Submit career application
// router.post("/apply", upload.single("resume"), async (req, res) => {
//   try {
//     const { firstName, lastName, email, phone, position, experience, education, coverLetter, portfolio } = req.body

//     if (
//       !firstName ||
//       !lastName ||
//       !email ||
//       !phone ||
//       !position ||
//       !experience ||
//       !education ||
//       !coverLetter ||
//       !req.file
//     ) {
//       return res.status(400).json({ error: "Missing required fields" })
//     }

//     const career = new Career({
//       firstName,
//       lastName,
//       email,
//       phone,
//       position,
//       yearsOfExperience: Number.parseInt(experience),
//       educationLevel: education,
//       coverLetter,
//       resumePath: `/uploads/${req.file.filename}`,
//       portfolioLink: portfolio || null,
//     })

//     await career.save()

//     // Send email notification to admin
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: `New Career Application from ${firstName} ${lastName}`,
//       html: `
//         <h2>New Career Application</h2>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Position:</strong> ${position}</p>
//         <p><strong>Experience:</strong> ${experience} years</p>
//         <p><strong>Education:</strong> ${education}</p>
//         <p><strong>Cover Letter:</strong></p>
//         <p>${coverLetter}</p>
//         <p><strong>Portfolio:</strong> ${portfolio || "Not provided"}</p>
//       `,
//     })

//     // Send confirmation email to applicant
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Application Received",
//       html: `
//         <h2>Thank you for applying!</h2>
//         <p>Hi ${firstName},</p>
//         <p>We have received your application for the ${position} position. Our team will review it and get back to you soon.</p>
//         <p>Best regards,<br>Structural Engineering Team</p>
//       `,
//     })

//     res.json({ success: true, message: "Application submitted successfully" })
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })

// // Get all applications (admin)
// router.get("/all", async (req, res) => {
//   try {
//     const applications = await Career.find().sort({ createdAt: -1 })
//     res.json(applications)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })

// // Update application status
// router.patch("/:id/status", async (req, res) => {
//   try {
//     const { status } = req.body
//     const application = await Career.findByIdAndUpdate(req.params.id, { status }, { new: true })
//     res.json(application)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })

// export default router


import express from "express";
import Career from "../models/Career.js";

const router = express.Router();

// ✅ Fix: dynamically import upload and transporter to avoid circular dependency
let upload, transporter;
(async () => {
  const serverModule = await import("../server.js");
  upload = serverModule.upload;
  transporter = serverModule.transporter;
})();

// Submit career application
router.post("/apply", async (req, res, next) => {
  try {
    // Wait until upload is ready
    if (!upload) {
      return res.status(503).json({ error: "Upload service not initialized yet" });
    }

    upload.single("resume")(req, res, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res.status(400).json({ error: "File upload failed" });
      }

      try {
        const {
          firstName,
          lastName,
          email,
          phone,
          position,
          experience,
          education,
          coverLetter,
          portfolio,
        } = req.body;

        if (
          !firstName ||
          !lastName ||
          !email ||
          !phone ||
          !position ||
          !experience ||
          !education ||
          !coverLetter ||
          !req.file
        ) {
          return res.status(400).json({ error: "Missing required fields" });
        }

        const career = new Career({
          firstName,
          lastName,
          email,
          phone,
          position,
          yearsOfExperience: Number.parseInt(experience),
          educationLevel: education,
          coverLetter,
          resumePath: `/uploads/${req.file.filename}`,
          portfolioLink: portfolio || null,
        });

        await career.save();

        // ✅ Email to admin
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Career Application from ${firstName} ${lastName}`,
          html: `
            <h2>New Career Application</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Experience:</strong> ${experience} years</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Cover Letter:</strong></p>
            <p>${coverLetter}</p>
            <p><strong>Portfolio:</strong> ${portfolio || "Not provided"}</p>
          `,
        });

        // ✅ Email to applicant
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Application Received",
          html: `
            <h2>Thank you for applying!</h2>
            <p>Hi ${firstName},</p>
            <p>We have received your application for the ${position} position. Our team will review it and get back to you soon.</p>
            <p>Best regards,<br>Structural Engineering Team</p>
          `,
        });

        res.json({ success: true, message: "Application submitted successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get all applications (admin)
router.get("/all", async (req, res) => {
  try {
    const applications = await Career.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update application status
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Career.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
