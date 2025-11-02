"use client"

import { BarChart3, FileText, Mail, Briefcase, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { logout } from "@/store/authSlice"
import { useNavigate } from "react-router-dom"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const menuItems = [
    { id: "overview", label: "Dashboard", icon: BarChart3 },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "blogs", label: "Blogs", icon: FileText },
    { id: "messages", label: "Messages", icon: Mail },
    { id: "applications", label: "Applications", icon: Briefcase },
  ]

  const handleLogout = () => {
    dispatch(logout())
    navigate("/admin/login")
  }

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-primary">Structural ENG</h2>
        <p className="text-xs text-muted-foreground">Admin Panel</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <Button variant="outline" className="w-full gap-2 bg-transparent" onClick={handleLogout}>
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

export default AdminSidebar
