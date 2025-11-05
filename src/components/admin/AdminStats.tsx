"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { BarChart3, FileText, Mail, Briefcase, Loader2 } from "lucide-react"
import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"

const AdminStats = () => {
  const { token } = useSelector((state: RootState) => state.auth)
  const [stats, setStats] = useState({
    projects: 0,
    blogs: 0,
    messages: 0,
    applications: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      const safeFetch = async (url: string) => {
        try {
          const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
          if (!res.ok) return []
          const data = await res.json()
          if (Array.isArray(data)) return data
          // if response like { projects: [...] } or { data: [...] }
          return Object.values(data).find(Array.isArray) || []
        } catch {
          return []
        }
      }

      try {
        const [projects, blogs, messages, applications] = await Promise.all([
          safeFetch("http://localhost:5000/api/projects"),
          safeFetch("http://localhost:5000/api/blogs"),
          safeFetch("http://localhost:5000/api/contact/all"),
          safeFetch("http://localhost:5000/api/career/all"),
        ])

        setStats({
          projects: projects.length,
          blogs: blogs.length,
          messages: messages.length,
          applications: applications.length,
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    if (token) fetchStats()
  }, [token])

  const statCards = [
    { label: "Total Projects", value: stats.projects, icon: Briefcase, color: "bg-blue-500/10" },
    { label: "Total Blogs", value: stats.blogs, icon: FileText, color: "bg-green-500/10" },
    { label: "Contact Messages", value: stats.messages, icon: Mail, color: "bg-orange-500/10" },
    { label: "Job Applications", value: stats.applications, icon: BarChart3, color: "bg-purple-500/10" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Monitor your content and submissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  {loading ? (
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  ) : (
                    <p className="text-4xl font-bold">{stat.value}</p>
                  )}
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="p-8 bg-primary/5 border-primary/20">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <p className="text-muted-foreground">
          Use the tabs above to manage your projects, blogs, messages, and applications.
        </p>
      </Card>
    </div>
  )
}

export default AdminStats
