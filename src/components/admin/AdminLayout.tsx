"use client"

import type React from "react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return <div className="min-h-screen bg-background">{children}</div>
}
