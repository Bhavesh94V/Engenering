// "use client"

// import type React from "react"

// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import type { RootState } from "@/store/store"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Plus, Edit2, Trash2 } from "lucide-react"
// import { LoadingSpinner } from "@/components/common/LoadingSpinner"

// interface Blog {
//   _id: string
//   title: string
//   excerpt: string
//   author: string
//   date: string
//   readTime: string
//   category: string
//   imagePath: string
//   featured: boolean
//   content: Array<{ type: string; heading?: string; text: string }>
// }

// const AdminBlogs = () => {
//   const { token } = useSelector((state: RootState) => state.auth)
//   const [blogs, setBlogs] = useState<Blog[]>([])
//   const [loading, setLoading] = useState(true)
//   const [isOpen, setIsOpen] = useState(false)
//   const [editingId, setEditingId] = useState<string | null>(null)
//   const [formData, setFormData] = useState({
//     title: "",
//     excerpt: "",
//     author: "",
//     date: new Date().toISOString().split("T")[0],
//     readTime: "5 min read",
//     category: "Engineering",
//     featured: false,
//     content: [{ type: "intro", text: "" }],
//     image: null as File | null,
//   })

//   useEffect(() => {
//     fetchBlogs()
//   }, [token])

//   const fetchBlogs = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/blogs", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       const data = await res.json()
//       setBlogs(data)
//     } catch (error) {
//       console.error("Error fetching blogs:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     const formDataToSend = new FormData()
//     formDataToSend.append("title", formData.title)
//     formDataToSend.append("excerpt", formData.excerpt)
//     formDataToSend.append("author", formData.author)
//     formDataToSend.append("date", formData.date)
//     formDataToSend.append("readTime", formData.readTime)
//     formDataToSend.append("category", formData.category)
//     formDataToSend.append("featured", formData.featured.toString())
//     formDataToSend.append("content", JSON.stringify(formData.content))
//     if (formData.image) {
//       formDataToSend.append("image", formData.image)
//     }

//     try {
//       const method = editingId ? "PUT" : "POST"
//       const url = editingId ? `http://localhost:5000/api/blogs/${editingId}` : "http://localhost:5000/api/blogs"

//       const res = await fetch(url, {
//         method,
//         headers: { Authorization: `Bearer ${token}` },
//         body: formDataToSend,
//       })

//       if (res.ok) {
//         setIsOpen(false)
//         setFormData({
//           title: "",
//           excerpt: "",
//           author: "",
//           date: new Date().toISOString().split("T")[0],
//           readTime: "5 min read",
//           category: "Engineering",
//           featured: false,
//           content: [{ type: "intro", text: "" }],
//           image: null,
//         })
//         setEditingId(null)
//         fetchBlogs()
//       }
//     } catch (error) {
//       console.error("Error saving blog:", error)
//     }
//   }

//   const handleDelete = async (id: string) => {
//     if (confirm("Are you sure you want to delete this blog?")) {
//       try {
//         await fetch(`http://localhost:5000/api/blogs/${id}`, {
//           method: "DELETE",
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         fetchBlogs()
//       } catch (error) {
//         console.error("Error deleting blog:", error)
//       }
//     }
//   }

//   const handleEdit = (blog: Blog) => {
//     setFormData({
//       title: blog.title,
//       excerpt: blog.excerpt,
//       author: blog.author,
//       date: blog.date,
//       readTime: blog.readTime,
//       category: blog.category,
//       featured: blog.featured,
//       content: blog.content,
//       image: null,
//     })
//     setEditingId(blog._id)
//     setIsOpen(true)
//   }

//   if (loading) return <LoadingSpinner />

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold">Blog Posts</h2>
//           <p className="text-muted-foreground">Manage your blog content</p>
//         </div>
//         <Dialog open={isOpen} onOpenChange={setIsOpen}>
//           <DialogTrigger asChild>
//             <Button className="gap-2" onClick={() => setEditingId(null)}>
//               <Plus className="w-4 h-4" />
//               Add Blog
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//             <DialogHeader>
//               <DialogTitle>{editingId ? "Edit Blog" : "Add New Blog"}</DialogTitle>
//             </DialogHeader>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <Input
//                 placeholder="Blog Title"
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 required
//               />

//               <Textarea
//                 placeholder="Excerpt"
//                 value={formData.excerpt}
//                 onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
//                 rows={2}
//                 required
//               />

//               <div className="grid grid-cols-2 gap-4">
//                 <Input
//                   placeholder="Author"
//                   value={formData.author}
//                   onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//                   required
//                 />
//                 <Input
//                   type="date"
//                   value={formData.date}
//                   onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <Input
//                   placeholder="Read Time (e.g., 5 min read)"
//                   value={formData.readTime}
//                   onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
//                 />
//                 <Input
//                   placeholder="Category"
//                   value={formData.category}
//                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                   required
//                 />
//               </div>

//               <Textarea
//                 placeholder="Content (intro)"
//                 value={formData.content[0]?.text || ""}
//                 onChange={(e) => {
//                   const newContent = [...formData.content]
//                   newContent[0] = { type: "intro", text: e.target.value }
//                   setFormData({ ...formData, content: newContent })
//                 }}
//                 rows={6}
//                 required
//               />

//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={formData.featured}
//                   onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
//                 />
//                 <span>Featured</span>
//               </label>

//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
//               />

//               <Button type="submit" className="w-full">
//                 {editingId ? "Update Blog" : "Create Blog"}
//               </Button>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="grid gap-4">
//         {blogs.map((blog) => (
//           <Card key={blog._id} className="p-4 hover:shadow-lg transition-shadow">
//             <div className="flex items-start justify-between">
//               <div className="flex-1">
//                 <h3 className="font-bold text-lg">{blog.title}</h3>
//                 <p className="text-sm text-muted-foreground">
//                   By {blog.author} • {blog.date} • {blog.readTime}
//                 </p>
//                 <p className="text-sm mt-2">{blog.excerpt}</p>
//               </div>
//               <div className="flex gap-2">
//                 <Button variant="outline" size="sm" onClick={() => handleEdit(blog)} className="gap-2">
//                   <Edit2 className="w-4 h-4" />
//                 </Button>
//                 <Button variant="destructive" size="sm" onClick={() => handleDelete(blog._id)} className="gap-2">
//                   <Trash2 className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AdminBlogs




























"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit2, Trash2 } from "lucide-react"
import { LoadingSpinner } from "@/components/common/LoadingSpinner"

interface BlogContent {
  type: "intro" | "section"
  heading?: string
  text: string
}

interface Blog {
  _id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  imagePath: string
  featured: boolean
  content: BlogContent[]
}

const AdminBlogs = () => {
  const { token } = useSelector((state: RootState) => state.auth)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    readTime: "5 min read",
    category: "Engineering",
    featured: false,
    content: [{ type: "intro" as const, text: "" }],
    image: null as File | null,
  })

  useEffect(() => {
    fetchBlogs()
  }, [token])

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blogs", {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setBlogs(data)
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    formDataToSend.append("title", formData.title)
    formDataToSend.append("excerpt", formData.excerpt)
    formDataToSend.append("author", formData.author)
    formDataToSend.append("date", formData.date)
    formDataToSend.append("readTime", formData.readTime)
    formDataToSend.append("category", formData.category)
    formDataToSend.append("featured", formData.featured.toString())
    formDataToSend.append("content", JSON.stringify(formData.content))
    if (formData.image) {
      formDataToSend.append("image", formData.image)
    }

    try {
      const method = editingId ? "PUT" : "POST"
      const url = editingId ? `http://localhost:5000/api/blogs/${editingId}` : "http://localhost:5000/api/blogs"

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formDataToSend,
      })

      if (res.ok) {
        setIsOpen(false)
        setFormData({
          title: "",
          excerpt: "",
          author: "",
          date: new Date().toISOString().split("T")[0],
          readTime: "5 min read",
          category: "Engineering",
          featured: false,
          content: [{ type: "intro", text: "" }],
          image: null,
        })
        setEditingId(null)
        fetchBlogs()
      }
    } catch (error) {
      console.error("Error saving blog:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await fetch(`http://localhost:5000/api/blogs/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        })
        fetchBlogs()
      } catch (error) {
        console.error("Error deleting blog:", error)
      }
    }
  }

  const handleEdit = (blog: Blog) => {
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      author: blog.author,
      date: blog.date,
      readTime: blog.readTime,
      category: blog.category,
      featured: blog.featured,
      content: blog.content,
      image: null,
    })
    setEditingId(blog._id)
    setIsOpen(true)
  }

  const addContentSection = () => {
    setFormData({
      ...formData,
      content: [...formData.content, { type: "section" as const, heading: "", text: "" }],
    })
  }

  const removeContentSection = (index: number) => {
    setFormData({
      ...formData,
      content: formData.content.filter((_, i) => i !== index),
    })
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Blog Posts</h2>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => setEditingId(null)}>
              <Plus className="w-4 h-4" />
              Add Blog
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Blog" : "Add New Blog"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Blog Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />

              <Textarea
                placeholder="Excerpt (short summary)"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={2}
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                />
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Read Time (e.g., 5 min read)"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                />
                <Input
                  placeholder="Category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-4 border-t pt-4">
                <h3 className="font-semibold">Content Sections</h3>
                {formData.content.map((section, index) => (
                  <div key={index} className="border rounded p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{section.type.toUpperCase()}</span>
                      {formData.content.length > 1 && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => removeContentSection(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>

                    {section.type === "section" && (
                      <Input
                        placeholder="Section Heading"
                        value={section.heading || ""}
                        onChange={(e) => {
                          const newContent = [...formData.content]
                          newContent[index] = { ...section, heading: e.target.value }
                          setFormData({ ...formData, content: newContent })
                        }}
                      />
                    )}

                    <Textarea
                      placeholder={section.type === "intro" ? "Introduction text..." : "Section content..."}
                      value={section.text}
                      onChange={(e) => {
                        const newContent = [...formData.content]
                        newContent[index] = { ...section, text: e.target.value }
                        setFormData({ ...formData, content: newContent })
                      }}
                      rows={4}
                      required
                    />
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addContentSection} className="w-full bg-transparent">
                  Add Section
                </Button>
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                />
                <span>Featured</span>
              </label>

              <div>
                <label className="block text-sm font-medium mb-2">Blog Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                  required={!editingId}
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full">
                {editingId ? "Update Blog" : "Create Blog"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <Card key={blog._id} className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-lg">{blog.title}</h3>
                <p className="text-sm text-muted-foreground">
                  By {blog.author} • {blog.date} • {blog.readTime}
                </p>
                <p className="text-sm mt-2">{blog.excerpt}</p>
                <p className="text-xs text-muted-foreground mt-2">{blog.content.length} sections</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleEdit(blog)} className="gap-2">
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(blog._id)} className="gap-2">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AdminBlogs
