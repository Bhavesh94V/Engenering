"use client"

import { useEffect, useState } from "react"

interface Project {
  _id: string
  title: string
  category: string
  location: string
  year: string
  imagePath: string
  description?: string
  client?: string
  area?: string
  engineeringChallenges: string
  technicalSolutions: string
  results: string
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects")
        if (!response.ok) throw new Error("Failed to fetch projects")
        const data = await response.json()
        setProjects(data)
        setError(null)
      } catch (err: any) {
        setError(err.message)
        console.error("Error fetching projects:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}
