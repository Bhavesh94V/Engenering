// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error("404 Error: User attempted to access non-existent route:", location.pathname);
//   }, [location.pathname]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="text-center">
//         <h1 className="mb-4 text-4xl font-bold">404</h1>
//         <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
//         <a href="/" className="text-blue-500 underline hover:text-blue-700">
//           Return to Home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NotFound;




"use client"

import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Home, ArrowRight } from "lucide-react"

const NotFound = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Array<{ title: string; path: string }>>([])

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname)
  }, [location.pathname])

  const allPages = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
    { title: "Team", path: "/team" },
    { title: "Certifications", path: "/certifications" },
    { title: "Why Choose Us", path: "/why-choose-us" },
    { title: "Clients", path: "/clients" },
    { title: "Career", path: "/career" },
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const filtered = allPages.filter((page) => page.title.toLowerCase().includes(query.toLowerCase()))
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full space-y-12">
        {/* 404 Header */}
        <div className="text-center space-y-4">
          <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Search Box */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search our site..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 py-6 text-base"
            />
          </div>

          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="grid gap-2">
              {suggestions.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="flex items-center justify-between p-4 bg-muted/50 hover:bg-muted rounded-lg transition-colors group"
                >
                  <span className="font-medium">{page.title}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Popular Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { title: "Home", path: "/" },
              { title: "Projects", path: "/projects" },
              { title: "Services", path: "/services" },
              { title: "Contact Us", path: "/contact" },
            ].map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors text-center font-medium hover:text-primary"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
