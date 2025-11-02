"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const AnalyticsTracker = () => {
    const location = useLocation()

    useEffect(() => {
        // Track page views
        if (window.gtag) {
            window.gtag("config", "GA_MEASUREMENT_ID", {
                page_path: location.pathname,
            })
        }

        // Log page view for debugging
        console.log("[Analytics] Page view:", location.pathname)
    }, [location])

    return null
}

// Extend window interface for gtag
declare global {
    interface Window {
        gtag?: (command: string, id: string, config: any) => void
    }
}
