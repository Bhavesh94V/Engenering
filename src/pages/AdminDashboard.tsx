"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store/store"
import { logout } from "@/store/authSlice"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, BarChart3, FileText, Mail, Briefcase } from "lucide-react"
import AdminSidebar from "@/components/admin/AdminSidebar"
import AdminProjects from "@/components/admin/AdminProjects"
import AdminBlogs from "@/components/admin/AdminBlogs"
import AdminMessages from "@/components/admin/AdminMessages"
import AdminApplications from "@/components/admin/AdminApplications"
import AdminStats from "@/components/admin/AdminStats"

const AdminDashboard = () => {
  const { admin } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("overview")

  const handleLogout = () => {
    dispatch(logout())
    navigate("/admin/login")
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-card border-b border-border px-8 py-4 flex items-center justify-between">
          <div>         
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">Welcome back, {admin?.username}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="overview" className="gap-2">
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="blogs" className="gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Blogs</span>
              </TabsTrigger>
              <TabsTrigger value="messages" className="gap-2">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Messages</span>
              </TabsTrigger>
              <TabsTrigger value="applications" className="gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Applications</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <AdminStats />
            </TabsContent>

            <TabsContent value="projects">
              <AdminProjects />
            </TabsContent>

            <TabsContent value="blogs">
              <AdminBlogs />
            </TabsContent>

            <TabsContent value="messages">
              <AdminMessages />
            </TabsContent>

            <TabsContent value="applications">
              <AdminApplications />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
