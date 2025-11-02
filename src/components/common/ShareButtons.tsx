"use client"

import { Share2, Linkedin, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ShareButtonsProps {
    title: string
    url: string
    description?: string
}

export const ShareButtons = ({ title, url, description }: ShareButtonsProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const shareLinks = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    }

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Share:</span>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" aria-label="Share on LinkedIn">
                    <Linkedin className="w-4 h-4" />
                </Button>
            </a>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" aria-label="Share on Facebook">
                    <Facebook className="w-4 h-4" />
                </Button>
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" aria-label="Share on Twitter">
                    <Twitter className="w-4 h-4" />
                </Button>
            </a>
            <Button variant="ghost" size="sm" onClick={handleCopyLink} aria-label="Copy link to clipboard">
                <Share2 className="w-4 h-4" />
            </Button>
            {copied && <span className="text-xs text-green-600">Copied!</span>}
        </div>
    )
}
