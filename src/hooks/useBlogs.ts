"use client"

import { useEffect, useState } from "react"

interface Blog {
  _id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  imagePath: string
  featured?: boolean
  content: Array<{ type: string; heading?: string; text: string }>
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs")
        if (!response.ok) throw new Error("Failed to fetch blogs")
        const data = await response.json()
        setBlogs(data)
        setError(null)
      } catch (err: any) {
        setError(err.message)
        console.error("Error fetching blogs:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return { blogs, loading, error }
}
