"use client"

import { useState, useEffect } from "react"

interface Project {
  _id: string
  id: number
  title: string
  category: string
  location: string
  year: string
  image: string
  imagePath?: string
  gallery?: string[]
  description?: string
  client?: string
  area?: string
  span?: string
  engineeringChallenges?: string
  technicalSolutions?: string
  results?: string
}

export const useProjectsAPI = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:5000/api/projects")
        if (!response.ok) throw new Error("Failed to fetch projects")
        const data = await response.json()
        const mappedProjects = data.map((project: any, index: number) => ({
          ...project,
          id: project.id || index + 1,
          image: project.imagePath || project.image,
          span: project.span || "col-span-1 row-span-1",
        }))
        setProjects(mappedProjects)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch projects")
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}

export const useProjectDetail = (id: string | number) => {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        const response = await fetch(`http://localhost:5000/api/projects/${id}`)
        if (!response.ok) throw new Error("Project not found")
        const data = await response.json()
        setProject({
          ...data,
          image: data.imagePath || data.image,
        })
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch project")
        setProject(null)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchProject()
  }, [id])

  return { project, loading, error }
}
