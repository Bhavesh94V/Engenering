export const PerformanceMonitor = () => {
    if (typeof window === "undefined") return null

    // Log Core Web Vitals
    if ("web-vital" in window) {
        const reportWebVitals = (metric: any) => {
            console.log(`[Performance] ${metric.name}:`, metric.value)
        }

        // Simulate web vitals tracking
        if (window.requestIdleCallback) {
            window.requestIdleCallback(() => {
                const perfData = window.performance.getEntriesByType("navigation")[0] as any
                if (perfData) {
                    console.log("[Performance] Page Load Time:", perfData.loadEventEnd - perfData.fetchStart)
                }
            })
        }
    }

    return null
}
