export interface SEOConfig {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  author?: string
  keywords?: string
}

export const defaultSEO: SEOConfig = {
  title: "Structural Engineering Excellence | Precision Built To Last",
  description:
    "Award-winning structural engineering firm specializing in innovative design solutions for commercial, industrial, and infrastructure projects.",
  image: "https://lovable.dev/opengraph-image-p98pqg.png",
  type: "website",
  author: "Structural Engineering Firm",
  keywords:
    "structural engineering, civil engineering, commercial buildings, infrastructure design, industrial structures",
}

export const pageSEO: Record<string, SEOConfig> = {
  home: defaultSEO,
  about: {
    title: "About Us | Structural Engineering Excellence",
    description:
      "Learn about our award-winning team of structural engineers with decades of combined experience in innovative design solutions.",
    keywords: "about structural engineering, engineering team, experience, expertise",
  },
  services: {
    title: "Services | Structural Engineering Solutions",
    description:
      "Comprehensive structural engineering services for commercial, industrial, infrastructure, and residential projects.",
    keywords: "structural engineering services, design services, consulting",
  },
  projects: {
    title: "Projects | Structural Engineering Portfolio",
    description:
      "Explore our portfolio of completed structural engineering projects across commercial, industrial, infrastructure, and residential sectors.",
    keywords: "structural engineering projects, portfolio, case studies",
  },
  blog: {
    title: "Blog | Structural Engineering Insights",
    description: "Latest insights, trends, and technical articles about structural engineering and construction.",
    keywords: "structural engineering blog, construction insights, engineering trends",
  },
  contact: {
    title: "Contact Us | Structural Engineering Firm",
    description: "Get in touch with our structural engineering team for consultations and project inquiries.",
    keywords: "contact structural engineering, consultation, inquiry",
  },
}

export const generateStructuredData = (type: string, data: any) => {
  const baseUrl = "https://structuralengineering.com"

  const schemas: Record<string, any> = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Structural Engineering Firm",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: "Award-winning structural engineering firm",
      sameAs: [
        "https://www.linkedin.com/company/structural-engineering",
        "https://www.facebook.com/structuralengineering",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+1-800-ENGINEER",
        email: "info@structuralengineering.com",
      },
    },
    project: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: data.title,
      description: data.description,
      image: data.image,
      datePublished: data.year,
      author: {
        "@type": "Organization",
        name: "Structural Engineering Firm",
      },
    },
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.title,
      description: data.description,
      provider: {
        "@type": "Organization",
        name: "Structural Engineering Firm",
      },
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: data.items.map((item: any, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `${baseUrl}${item.url}`,
      })),
    },
  }

  return schemas[type] || null
}

export const updateMetaTags = (config: SEOConfig) => {
  // Update title
  document.title = config.title

  // Update or create meta tags
  const updateMeta = (name: string, content: string, property = false) => {
    const attr = property ? "property" : "name"
    let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
    if (!tag) {
      tag = document.createElement("meta")
      tag.setAttribute(attr, name)
      document.head.appendChild(tag)
    }
    tag.content = content
  }

  updateMeta("description", config.description)
  updateMeta("keywords", config.keywords || "")
  updateMeta("author", config.author || "")
  updateMeta("og:title", config.title, true)
  updateMeta("og:description", config.description, true)
  updateMeta("og:type", config.type || "website", true)
  if (config.image) updateMeta("og:image", config.image, true)
  if (config.url) updateMeta("og:url", config.url, true)
  updateMeta("twitter:card", "summary_large_image")
  if (config.image) updateMeta("twitter:image", config.image)
}

export const addStructuredData = (schema: any) => {
  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}
