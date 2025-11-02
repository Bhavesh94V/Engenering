
"use client"

import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroStructure1 from "@/assets/hero-structure-1.jpg"
import SearchBar from "@/components/common/SearchBar"
import { LazyImage } from "@/components/common/LazyImage"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { useSEO } from "@/hooks/useSEO"
import { pageSEO } from "@/lib/seo"
import { useBlogsAPI } from "@/hooks/useBlogsAPI"

const ITEMS_PER_PAGE = 9

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const { blogs: allBlogs, loading, error } = useBlogsAPI()

  useSEO(pageSEO.blog)

  const categories = ["All", ...Array.from(new Set(allBlogs.map((post) => post.category)))]

  const filteredPosts = useMemo(() => {
    return allBlogs.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery, allBlogs])

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const totalPages = Math.ceil(regularPosts.length / ITEMS_PER_PAGE)
  const paginatedPosts = regularPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroStructure1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container-fluid text-center space-y-6">
          <Breadcrumbs items={[{ label: "Blog", url: "/blog" }]} />

          <p className="text-primary text-sm uppercase tracking-widest">Insights & Expertise</p>
          <h1 className="text-5xl md:text-7xl font-bold">Engineering Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry insights, technical knowledge, and innovation updates from our team of experts.
          </p>
          <div className="flex justify-center pt-4">
            <SearchBar placeholder="Search articles..." onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 container-fluid">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Error State */}
      {error && (
        <section className="py-12 container-fluid">
          <div className="text-center">
            <p className="text-lg text-red-500">Error loading blogs: {error}</p>
          </div>
        </section>
      )}

      {/* Loading State */}
      {loading && (
        <section className="py-12 container-fluid">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Loading articles...</p>
          </div>
        </section>
      )}

      {/* Featured Posts */}
      {!loading && featuredPosts.length > 0 && (
        <section className="py-24 md:py-32 container-fluid">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post._id || post.id}
                to={`/blog/${post._id || post.id}`}
                className="group relative overflow-hidden bg-muted aspect-[16/10]"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="absolute inset-0">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
                      {post.category}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary">
                    <ArrowRight className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {!loading && (
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container-fluid">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
              {regularPosts.length > 0 && (
                <p className="text-muted-foreground mt-2">
                  Showing {paginatedPosts.length} of {regularPosts.length} articles
                </p>
              )}
            </div>

            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map((post, index) => (
                    <Link
                      key={post._id || post.id}
                      to={`/blog/${post._id || post.id}`}
                      className="group bg-background hover-lift hover:shadow-red transition-all duration-500"
                      style={{
                        animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <LazyImage
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs uppercase tracking-widest font-medium">
                          {post.category}
                        </div>

                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>

                        <div className="pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-border/50">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                      <Button
                        key={i + 1}
                        variant={currentPage === i + 1 ? "hero" : "outline"}
                        onClick={() => setCurrentPage(i + 1)}
                        size="sm"
                      >
                        {i + 1}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}

export default Blog
