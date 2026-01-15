"use client"

import type React from "react"

interface BadgeProps {
  children: React.ReactNode
  variant?: "success" | "warning" | "destructive" | "default"
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    destructive: "bg-red-100 text-red-800",
    default: "bg-muted text-muted-foreground",
  }

  return <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>{children}</span>
}
