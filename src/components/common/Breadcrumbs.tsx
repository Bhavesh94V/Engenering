"use client"

import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { generateStructuredData, addStructuredData } from "@/lib/seo"
import { useEffect } from "react"

interface BreadcrumbItem {
    label: string
    url: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    useEffect(() => {
        const schema = generateStructuredData("breadcrumb", { items })
        if (schema) addStructuredData(schema)
    }, [items])

    return (
        <nav className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-3 bg-muted/30">
            <Link to="/" className="hover:text-foreground transition-colors">
                Home
            </Link>
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {index === items.length - 1 ? (
                        <span className="text-foreground font-medium">{item.label}</span>
                    ) : (
                        <Link to={item.url} className="hover:text-foreground transition-colors">
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    )
}
