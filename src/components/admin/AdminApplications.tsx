"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, FileText, LinkIcon } from "lucide-react"
import { LoadingSpinner } from "@/components/common/LoadingSpinner"

interface Application {
  _id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  yearsOfExperience: number
  educationLevel: string
  coverLetter: string
  resumePath: string
  portfolioLink?: string
  status: string
  createdAt: string
}

const AdminApplications = () => {
  const { token } = useSelector((state: RootState) => state.auth)
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApplications()
  }, [token])

  const fetchApplications = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/career/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setApplications(data)
    } catch (error) {
      console.error("Error fetching applications:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`http://localhost:5000/api/career/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      })
      fetchApplications()
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Job Applications</h2>
        <p className="text-muted-foreground">Review and manage career applications</p>
      </div>

      <div className="grid gap-4">
        {applications.length === 0 ? (
          <Card className="p-8 text-center text-muted-foreground">No applications yet</Card>
        ) : (
          applications.map((app) => (
            <Card key={app._id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">
                      {app.firstName} {app.lastName}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Applied for: <span className="font-semibold">{app.position}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={app.status}
                      onChange={(e) => updateStatus(app._id, e.target.value)}
                      className="px-3 py-1 bg-black border border-border rounded text-sm"
                    >
                      <option>Pending</option>
                      <option>Reviewed</option>
                      <option>Shortlisted</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${app.email}`} className="text-primary hover:underline">
                      {app.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href={`tel:${app.phone}`} className="text-primary hover:underline">
                      {app.phone}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Experience</p>
                    <p className="font-semibold">{app.yearsOfExperience} years</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Education</p>
                    <p className="font-semibold">{app.educationLevel}</p>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Cover Letter</p>
                  <p className="text-sm">{app.coverLetter}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                    onClick={() => window.open(`http://localhost:5000${app.resumePath}`)}
                  >
                    <FileText className="w-4 h-4" />
                    View Resume
                  </Button>
                  {app.portfolioLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-transparent"
                      onClick={() => window.open(app.portfolioLink)}
                    >
                      <LinkIcon className="w-4 h-4" />
                      Portfolio
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

export default AdminApplications
