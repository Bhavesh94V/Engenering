"use client"

import { CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"

interface SuccessAnimationProps {
    message: string
    onComplete?: () => void
}

export const SuccessAnimation = ({ message, onComplete }: SuccessAnimationProps) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            onComplete?.()
        }, 3000)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <div
            className={`fixed top-4 right-4 flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-200 rounded-lg shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
        >
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">{message}</span>
        </div>
    )
}
