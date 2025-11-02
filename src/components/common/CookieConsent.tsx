"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [preferences, setPreferences] = useState({
        analytics: false,
        marketing: false,
    })

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent")
        if (!consent) {
            setIsVisible(true)
        }
    }, [])

    const handleAcceptAll = () => {
        localStorage.setItem("cookieConsent", JSON.stringify({ analytics: true, marketing: true, timestamp: Date.now() }))
        setIsVisible(false)
    }

    const handleAcceptSelected = () => {
        localStorage.setItem("cookieConsent", JSON.stringify({ ...preferences, timestamp: Date.now() }))
        setIsVisible(false)
    }

    const handleRejectAll = () => {
        localStorage.setItem("cookieConsent", JSON.stringify({ analytics: false, marketing: false, timestamp: Date.now() }))
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-2xl z-50 p-6">
            <div className="container-fluid max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                        <h3 className="font-semibold mb-2">Cookie Preferences</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            We use cookies to enhance your experience, analyze site traffic, and serve personalized content. By
                            clicking "Accept All", you consent to our use of cookies. You can customize your preferences below.
                        </p>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={preferences.analytics}
                                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                    className="w-4 h-4"
                                />
                                Analytics Cookies
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={preferences.marketing}
                                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                    className="w-4 h-4"
                                />
                                Marketing Cookies
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <Button variant="outline" onClick={handleRejectAll} className="text-sm bg-transparent">
                            Reject All
                        </Button>
                        <Button variant="outline" onClick={handleAcceptSelected} className="text-sm bg-transparent">
                            Accept Selected
                        </Button>
                        <Button onClick={handleAcceptAll} className="text-sm">
                            Accept All
                        </Button>
                    </div>

                    <button
                        onClick={handleRejectAll}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
