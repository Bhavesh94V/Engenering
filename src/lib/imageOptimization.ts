export const getOptimizedImageUrl = (url: string, width?: number, height?: number) => {
  // For production, integrate with image CDN like Cloudinary or Imgix
  // Example: return `https://cdn.example.com/image?url=${url}&w=${width}&h=${height}&q=80`
  return url
}

export const generateSrcSet = (url: string) => {
  // Generate responsive image srcset
  return {
    src: url,
    srcSet: `${url}?w=640 640w, ${url}?w=1024 1024w, ${url}?w=1920 1920w`,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1920px",
  }
}

export const preloadImage = (url: string) => {
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "image"
  link.href = url
  document.head.appendChild(link)
}

export const prefetchImage = (url: string) => {
  const link = document.createElement("link")
  link.rel = "prefetch"
  link.href = url
  document.head.appendChild(link)
}
