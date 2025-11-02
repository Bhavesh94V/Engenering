// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Skeleton } from "@/components/ui/skeleton"

// interface LazyImageProps {
//     src: string
//     alt: string
//     className?: string
//     width?: number
//     height?: number
// }

// export const LazyImage = ({ src, alt, className = "", width, height }: LazyImageProps) => {
//     const [isLoaded, setIsLoaded] = useState(false)
//     const [imageSrc, setImageSrc] = useState<string | null>(null)
//     const imgRef = useRef<HTMLImageElement>(null)

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setImageSrc(src)
//                     observer.unobserve(entry.target)
//                 }
//             },
//             { rootMargin: "50px" },
//         )

//         if (imgRef.current) {
//             observer.observe(imgRef.current)
//         }

//         return () => observer.disconnect()
//     }, [src])

//     return (
//         <div className="relative overflow-hidden" ref={imgRef}>
//             {!isLoaded && <Skeleton className={`${className} absolute inset-0`} />}
//             {imageSrc && (
//                 <img
//                     src={imageSrc || "/placeholder.svg"}
//                     alt={alt}
//                     width={width}
//                     height={height}
//                     className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
//                     onLoad={() => setIsLoaded(true)}
//                 />
//             )}
//         </div>
//     )
// }















"use client"

import { useState, useEffect, useRef } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface LazyImageProps {
    src: string
    alt: string
    className?: string
    width?: number
    height?: number
}

export const LazyImage = ({ src, alt, className = "", width, height }: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const [error, setError] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setImageSrc(src || "/placeholder.svg")
                    observer.unobserve(entry.target)
                }
            },
            { rootMargin: "50px" },
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [src])

    const handleImageError = () => {
        setError(true)
        setImageSrc("/placeholder.svg")
    }

    return (
        <div className="relative overflow-hidden" ref={imgRef}>
            {!isLoaded && !error && <Skeleton className={`${className} absolute inset-0`} />}
            {imageSrc && (
                <img
                    src={imageSrc || "/placeholder.svg"}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setIsLoaded(true)}
                    onError={handleImageError}
                />
            )}
        </div>
    )
}
