"use client"

import type React from "react"

import { Briefcase, Users, TrendingUp, CheckCircle2, Heart, Award, Target } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import heroStructure3 from "@/assets/hero-structure-3.jpg"
import aboutBlueprint from "@/assets/about-blueprint.jpg"
import { useState } from "react"
import { SuccessAnimation } from "@/components/common/SuccessAnimation"

const openings = [
  {
    title: "Senior Structural Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Lead complex structural design projects for commercial and residential developments.",
  },
  {
    title: "Bridge Design Engineer",
    department: "Infrastructure",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100k - $140k",
    description: "Specialized role focusing on bridge and highway infrastructure projects.",
  },
  {
    title: "Seismic Analysis Specialist",
    department: "Engineering",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Expert in earthquake engineering and seismic retrofitting of existing structures.",
  },
  {
    title: "Project Manager - Industrial",
    department: "Project Management",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$90k - $130k",
    description: "Manage industrial facility projects from concept through completion.",
  },
  {
    title: "Structural Designer",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$80k - $110k",
    description: "Create detailed structural drawings and calculations for diverse projects.",
  },
  {
    title: "Engineering Intern",
    department: "Engineering",
    location: "Multiple Locations",
    type: "Internship",
    salary: "$25/hour",
    description: "Gain hands-on experience working alongside senior engineers on real projects.",
  },
]

const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health insurance (medical, dental, vision)",
  "401(k) retirement plan with company match",
  "Professional development and training programs",
  "Flexible work arrangements and remote options",
  "Generous PTO and paid holidays",
  "Tuition reimbursement for continuing education",
  "Professional licensing support and exam preparation",
]

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    coverLetter: "",
    resume: null as File | null,
    portfolio: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "File size must be less than 5MB" }))
        return
      }
      setFormData((prev) => ({ ...prev, resume: file }))
      if (errors.resume) {
        setErrors((prev) => ({ ...prev, resume: "" }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.position ||
        !formData.experience ||
        !formData.education ||
        !formData.coverLetter ||
        !formData.resume
      ) {
        throw new Error("All fields are required")
      }

      setIsSubmitting(true)

      const submitFormData = new FormData()
      submitFormData.append("firstName", formData.firstName)
      submitFormData.append("lastName", formData.lastName)
      submitFormData.append("email", formData.email)
      submitFormData.append("phone", formData.phone)
      submitFormData.append("position", formData.position)
      submitFormData.append("experience", formData.experience)
      submitFormData.append("education", formData.education)
      submitFormData.append("coverLetter", formData.coverLetter)
      submitFormData.append("portfolio", formData.portfolio)
      if (formData.resume) {
        submitFormData.append("resume", formData.resume)
      }

      const response = await fetch("http://localhost:5000/api/career/apply", {
        method: "POST",
        body: submitFormData,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to submit application")
      }

      setShowSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        education: "",
        coverLetter: "",
        resume: null,
        portfolio: "",
      })

      setTimeout(() => setShowSuccess(false), 3000)
    } catch (error: any) {
      setErrors({ submit: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroStructure3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container-fluid text-center space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Careers</span>
          </div>

          <p className="text-primary text-sm uppercase tracking-widest">Join Our Team</p>
          <h1 className="text-5xl md:text-7xl font-bold">Build Your Career With Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of a team that's shaping the future of structural engineering through innovation, collaboration, and
            excellence.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Work With Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join a globally recognized firm where your skills will be challenged, your ideas valued, and your career
                accelerated. We invest in our people because they are our greatest asset.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Growth Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  Clear career paths with mentorship and professional development programs.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Innovative Projects</h3>
                <p className="text-muted-foreground text-sm">
                  Work on landmark projects that push the boundaries of engineering.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Collaborative Culture</h3>
                <p className="text-muted-foreground text-sm">
                  Team-oriented environment where knowledge sharing is encouraged.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Work-Life Balance</h3>
                <p className="text-muted-foreground text-sm">
                  Flexible arrangements that support your personal and professional goals.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={aboutBlueprint || "/placeholder.svg"}
              alt="Engineering team collaboration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Current Openings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our available positions and find the perfect role to advance your engineering career
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {openings.map((opening, index) => (
            <div
              key={index}
              className="p-8 bg-muted/30 hover:bg-muted/50 hover-lift transition-all duration-300 border-l-4 border-primary"
              style={{
                animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{opening.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {opening.department}
                    </span>
                    <span>{opening.location}</span>
                    <span>{opening.type}</span>
                    <span className="text-primary font-semibold">{opening.salary}</span>
                  </div>
                </div>
                <a href="#apply">
                  <Button variant="hero">Apply Now</Button>
                </a>
              </div>
              <p className="text-muted-foreground">{opening.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see the right position? We're always looking for talented engineers.
          </p>
          <a href="#apply">
            <Button variant="outline" size="lg">
              Submit General Application
            </Button>
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Benefits & Perks</h2>
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive benefits package designed to support your health, financial security, and
              professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background"
                style={{
                  animation: `fade-in-up 0.4s ease-out ${index * 0.05}s both`,
                }}
              >
                <div className="w-2 h-2 bg-primary flex-shrink-0" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Life at Structural ENG</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a culture that values innovation, collaboration, and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Collaborative Environment",
                description:
                  "Work alongside industry experts in a team-oriented atmosphere where knowledge sharing is celebrated.",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description:
                  "Clear advancement paths with mentorship programs and professional development opportunities.",
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description:
                  "Flexible arrangements and comprehensive benefits that support your personal and professional goals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background hover-lift hover:shadow-red transition-all duration-500"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Opportunities */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-10 w-10 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">Your Growth, Our Priority</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We invest in our team's continuous development through comprehensive training programs, conference
              attendance, and advanced certification support. Your professional growth is integral to our company's
              success.
            </p>
            <div className="space-y-4">
              {[
                "Professional licensing exam support",
                "Continuing education and training",
                "Leadership development programs",
                "Conference and seminar attendance",
                "Advanced software training",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative h-96"
            style={{
              backgroundImage: `url(${aboutBlueprint})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 md:py-32 bg-muted/30" id="apply">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h2>
            <p className="text-lg text-muted-foreground">
              Take the first step towards an exciting engineering career. Submit your application below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 md:p-12 rounded-lg shadow-lg">
              {errors.submit && (
                <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
                  {errors.submit}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position Interested In *</Label>
                <Input
                  id="position"
                  placeholder="e.g., Senior Structural Engineer"
                  value={formData.position}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input
                  id="experience"
                  type="number"
                  placeholder="5"
                  value={formData.experience}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Highest Education Level *</Label>
                <Input
                  id="education"
                  placeholder="e.g., M.S. in Structural Engineering"
                  value={formData.education}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter / Why Join Us? *</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                  rows={6}
                  value={formData.coverLetter}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume / CV *</Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                  required
                />
                <p className="text-sm text-muted-foreground">Upload your resume (PDF or DOC format, max 5MB)</p>
                {errors.resume && <p className="text-sm text-destructive">{errors.resume}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio Link (Optional)</Label>
                <Input
                  id="portfolio"
                  type="url"
                  placeholder="https://..."
                  value={formData.portfolio}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <Button variant="hero" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <span className="text-white font-semibold">Loading...</span> : "Submit Application"}
              </Button>

              {showSuccess && <SuccessAnimation message="Application submitted successfully! We'll review it soon." />}
            </form>

            {/* Benefits & Highlights */}
            <div className="space-y-8 lg:sticky lg:top-24">
              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Why Join Our Team?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Innovative Projects</h4>
                      <p className="text-muted-foreground">
                        Work on cutting-edge structural engineering projects that shape skylines and infrastructure.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Collaborative Culture</h4>
                      <p className="text-muted-foreground">
                        Join a team of experienced engineers who value collaboration and knowledge sharing.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Professional Growth</h4>
                      <p className="text-muted-foreground">
                        Continuous learning opportunities, certifications, and career advancement paths.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Competitive Benefits</h4>
                      <p className="text-muted-foreground">
                        Industry-leading compensation, health benefits, and work-life balance initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-foreground">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a diverse group of talented engineers who are passionate about structural excellence
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Team Members" },
            { value: "200+", label: "Combined Years Experience" },
            { value: "15", label: "Licensed PEs" },
            { value: "98%", label: "Employee Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-muted/30 hover-lift"
              style={{
                animation: `scale-in 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <p className="text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Career
