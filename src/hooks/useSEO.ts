"use client"

import { useEffect } from "react"
import { type SEOConfig, updateMetaTags, addStructuredData, generateStructuredData } from "@/lib/seo"

export const useSEO = (config: SEOConfig, structuredDataType?: string, structuredData?: any) => {
  useEffect(() => {
    updateMetaTags(config)
    window.scrollTo(0, 0)

    if (structuredDataType && structuredData) {
      const schema = generateStructuredData(structuredDataType, structuredData)
      if (schema) addStructuredData(schema)
    }
  }, [config, structuredDataType, structuredData])
}
