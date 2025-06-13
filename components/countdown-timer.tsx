"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set end date to 30 days from now
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="font-minecraft text-sm">
      <span className="text-amber-600">{timeLeft.days}d </span>
      <span className="text-amber-600">{timeLeft.hours}h </span>
      <span className="text-amber-600">{timeLeft.minutes}m </span>
      <span className="text-amber-600">{timeLeft.seconds}s</span>
    </div>
  )
}
