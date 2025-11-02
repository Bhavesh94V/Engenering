import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonCardProps {
    count?: number
    variant?: "project" | "blog" | "service"
}

export const SkeletonCard = ({ count = 1, variant = "project" }: SkeletonCardProps) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="space-y-4">
                    <Skeleton className={variant === "project" ? "h-64 w-full" : "h-48 w-full"} />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            ))}
        </>
    )
}
