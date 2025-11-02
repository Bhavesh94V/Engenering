"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PrintButtonProps {
    title?: string
}

export const PrintButton = ({ title = "Print Page" }: PrintButtonProps) => {
    const handlePrint = () => {
        window.print()
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            className="no-print bg-transparent"
            aria-label="Print this page"
        >
            <Printer className="w-4 h-4 mr-2" />
            {title}
        </Button>
    )
}
