import type { ReactNode } from "react"
import { AlertCircle } from "lucide-react"

interface FormFieldProps {
    label: string
    error?: string
    required?: boolean
    children: ReactNode
}

export const FormField = ({ label, error, required, children }: FormFieldProps) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
            </label>
            {children}
            {error && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                </div>
            )}
        </div>
    )
}
