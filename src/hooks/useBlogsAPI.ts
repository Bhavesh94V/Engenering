// "use client"

// import { useState, useEffect } from "react"

// interface BlogPost {
//   _id: string
//   id: number
//   title: string
//   excerpt: string
//   author: string
//   date: string
//   readTime: string
//   category: string
//   image: string
//   imagePath?: string
//   featured?: boolean
//   content: string | Array<{ type: string; heading?: string; text: string }>
// }

// export const useBlogsAPI = () => {
//   const [blogs, setBlogs] = useState<BlogPost[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true)
//         const response = await fetch("http://localhost:5000/api/blogs")
//         if (!response.ok) throw new Error("Failed to fetch blogs")
//         const data = await response.json()
//         const mappedBlogs = data.map((blog: any, index: number) => ({
//           ...blog,
//           id: blog.id || index + 1,
//           image: blog.imagePath || blog.image,
//           content: typeof blog.content === "string" ? blog.content : blog.content || "",
//         }))
//         setBlogs(mappedBlogs)
//         setError(null)
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to fetch blogs")
//         setBlogs([])
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchBlogs()
//   }, [])

//   return { blogs, loading, error }
// }

// export const useBlogDetail = (id: string | number) => {
//   const [blog, setBlog] = useState<BlogPost | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         setLoading(true)
//         const response = await fetch(`http://localhost:5000/api/blogs/${id}`)
//         if (!response.ok) throw new Error("Blog not found")
//         const data = await response.json()
//         setBlog({
//           ...data,
//           image: data.imagePath || data.image,
//         })
//         setError(null)
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to fetch blog")
//         setBlog(null)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) fetchBlog()
//   }, [id])

//   return { blog, loading, error }
// }














"use client"

import { useState, useEffect } from "react"

interface BlogPost {
  _id: string
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  imagePath?: string
  featured?: boolean
  content: string | Array<{ type: string; heading?: string; text: string }>
}

const getFullImageUrl = (imagePath: string): string => {
  if (!imagePath) return "/placeholder.svg"
  if (imagePath.startsWith("http")) return imagePath
  return `http://localhost:5000${imagePath}`
}

export const useBlogsAPI = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:5000/api/blogs")
        if (!response.ok) throw new Error("Failed to fetch blogs")
        const data = await response.json()
        const mappedBlogs = data.map((blog: any, index: number) => ({
          ...blog,
          id: blog._id || blog.id || index + 1,
          image: getFullImageUrl(blog.imagePath || blog.image),
          content: blog.content || [],
        }))
        setBlogs(mappedBlogs)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch blogs")
        setBlogs([])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return { blogs, loading, error }
}

export const useBlogDetail = (id: string | number) => {
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true)
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`)
        if (!response.ok) throw new Error("Blog not found")
        const data = await response.json()
        setBlog({
          ...data,
          image: getFullImageUrl(data.imagePath || data.image),
        })
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch blog")
        setBlog(null)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchBlog()
  }, [id])

  return { blog, loading, error }
}
