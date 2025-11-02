"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { LoadingSpinner } from "@/components/common/LoadingSpinner"

interface Message {
  _id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  projectType?: string
  projectDetails: string
  createdAt: string
}

const AdminMessages = () => {
  const { token } = useSelector((state: RootState) => state.auth)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [token])

  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setMessages(data)
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Contact Messages</h2>
        <p className="text-muted-foreground">View all contact form submissions</p>
      </div>

      <div className="grid gap-4">
        {messages.length === 0 ? (
          <Card className="p-8 text-center text-muted-foreground">No messages yet</Card>
        ) : (
          messages.map((message) => (
            <Card key={message._id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">
                      {message.firstName} {message.lastName}
                    </h3>
                    <p className="text-sm text-muted-foreground">{new Date(message.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${message.email}`} className="text-primary hover:underline">
                      {message.email}
                    </a>
                  </div>
                  {message.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href={`tel:${message.phone}`} className="text-primary hover:underline">
                        {message.phone}
                      </a>
                    </div>
                  )}
                  {message.projectType && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{message.projectType}</span>
                    </div>
                  )}
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">{message.projectDetails}</p>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

export default AdminMessages
