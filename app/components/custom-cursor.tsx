"use client"

import { useEffect, useState, useCallback } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition)
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [updateCursorPosition])

  return (
    <div
      className="fixed pointer-events-none z-40"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "10px",
        height: "10px",
        boxShadow: "0 0 10px 5px rgba(255,255,255,0.5)",
        borderRadius: "50%",
      }}
    />
  )
}

