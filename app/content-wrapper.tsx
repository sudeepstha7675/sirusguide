"use client"

import type React from "react"

interface ContentWrapperProps {
  children: React.ReactNode
}

export function ContentWrapper({ children }: ContentWrapperProps) {
  return <div className="content-area">{children}</div>
}
