"use client"

import { useState, useEffect, useRef } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface OptimizedImageProps {
    src: string
    alt: string
    className?: string
    width?: number
    height?: number
    priority?: boolean
}

export const OptimizedImage = ({ src, alt, className = "", width, height, priority = false }: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(priority)
    const [imageSrc, setImageSrc] = useState<string | null>(priority ? src : null)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (priority) {
            setImageSrc(src)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setImageSrc(src)
                    observer.unobserve(entry.target)
                }
            },
            { rootMargin: "100px" },
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [src, priority])

    return (
        <div className="relative overflow-hidden" ref={imgRef}>
            {!isLoaded && <Skeleton className={`${className} absolute inset-0`} />}
            {imageSrc && (
                <img
                    src={imageSrc || "/placeholder.svg"}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setIsLoaded(true)}
                    loading={priority ? "eager" : "lazy"}
                />
            )}
        </div>
    )
}
