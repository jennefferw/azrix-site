"use client"

import { useRef } from "react"

export default function Logo() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent) {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect || !glowRef.current) return

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    glowRef.current.style.setProperty("--x", x + "%")
    glowRef.current.style.setProperty("--y", y + "%")
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      className="relative inline-block"
    >
      <div
        ref={glowRef}
        className="absolute inset-0 blur-2xl opacity-0 hover:opacity-100 transition rounded-full"
        style={{
          background:
            "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.35), rgba(59,130,246,0.2), transparent 60%)",
        }}
      />

      <img
        src="/logo.svg"
        className="w-[160px] h-[160px] relative z-10"
        alt="Azrix"
      />
    </div>
  )
}