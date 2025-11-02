// "use client"

// import { useParams, Link } from "react-router-dom"
// import { Calendar, Clock, User } from "lucide-react"
// import { useBlogDetail, useBlogsAPI } from "@/hooks/useBlogsAPI"
// import SocialShare from "@/components/blog/SocialShare"
// import RelatedPosts from "@/components/blog/RelatedPosts"

// const BlogDetail = () => {
//   const { id } = useParams()
//   const { blog: currentPost, loading, error } = useBlogDetail(id)
//   const { blogs: allBlogs } = useBlogsAPI()

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-lg text-muted-foreground">Loading article...</p>
//         </div>
//       </div>
//     )
//   }

//   if (error || !currentPost) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
//           <Link to="/blog">
//             <button className="text-primary hover:text-primary-glow">Back to Blog</button>
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const otherPosts = allBlogs.filter((p) => (p._id || p.id) !== (currentPost._id || currentPost.id))

//   return (
//     <div className="min-h-screen pt-24">
//       <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block w-72">
//         <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-lg p-6 shadow-lg">
//           <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Quick Navigation</h3>
//           <div className="space-y-4 max-h-[70vh] overflow-y-auto">
//             {otherPosts.map((post) => (
//               <Link
//                 key={post._id || post.id}
//                 to={`/blog/${post._id || post.id}`}
//                 className="group flex gap-3 transition-all duration-300"
//               >
//                 <img
//                   src={post.image || "/placeholder.svg"}
//                   alt={post.title}
//                   className="w-16 h-16 rounded object-cover flex-shrink-0 group-hover:ring-2 group-hover:ring-primary transition-all"
//                 />
//                 <div>
//                   <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
//                     {post.title}
//                   </h4>
//                   <p className="text-xs text-muted-foreground mt-1">{post.category}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </aside>

//       <div className="container-fluid">
//         <div className="max-w-4xl mx-auto">
//           <header className="mb-12">
//             <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs uppercase mb-6 rounded-full">
//               {currentPost.category}
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">{currentPost.title}</h1>
//             <div className="flex gap-6 text-muted-foreground mb-8">
//               <span className="flex items-center gap-2">
//                 <User className="h-4 w-4" />
//                 {currentPost.author}
//               </span>
//               <span className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 {currentPost.date}
//               </span>
//               <span className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 {currentPost.readTime}
//               </span>
//             </div>
//             <img
//               src={currentPost.image || "/placeholder.svg"}
//               alt={currentPost.title}
//               className="w-full h-96 rounded-lg object-cover mb-8"
//             />
//           </header>

//           <article
//             className="prose prose-invert prose-lg max-w-none mb-16"
//             dangerouslySetInnerHTML={{ __html: typeof currentPost.content === "string" ? currentPost.content : "" }}
//           />

//           {/* Social Share */}
//           <div className="mt-12 pt-8 border-t border-border">
//             <SocialShare url={typeof window !== "undefined" ? window.location.href : ""} title={currentPost.title} />
//           </div>

//           {/* Related Posts */}
//           <RelatedPosts
//             currentPostId={currentPost._id || currentPost.id}
//             posts={allBlogs}
//             category={currentPost.category}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BlogDetail

























"use client"

import { useParams, Link } from "react-router-dom"
import { Calendar, Clock, User } from "lucide-react"
import { useBlogDetail, useBlogsAPI } from "@/hooks/useBlogsAPI"
import SocialShare from "@/components/blog/SocialShare"
import RelatedPosts from "@/components/blog/RelatedPosts"

const BlogDetail = () => {
  const { id } = useParams()
  const { blog: currentPost, loading, error } = useBlogDetail(id)
  const { blogs: allBlogs } = useBlogsAPI()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading article...</p>
        </div>
      </div>
    )
  }

  if (error || !currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog">
            <button className="text-primary hover:text-primary-glow">Back to Blog</button>
          </Link>
        </div>
      </div>
    )
  }

  const otherPosts = allBlogs.filter((p) => (p._id || p.id) !== (currentPost._id || currentPost.id))

  const renderContent = () => {
    if (typeof currentPost.content === "string") {
      return <div className="prose prose-invert max-w-none mb-16">{currentPost.content}</div>
    }

    if (Array.isArray(currentPost.content)) {
      return (
        <article className="max-w-none mb-16">
          {currentPost.content.map((block, index) => (
            <div key={index} className="mb-8">
              {block.type === "intro" && <p className="text-lg text-muted-foreground leading-relaxed">{block.text}</p>}
              {block.type === "section" && (
                <>
                  {block.heading && <h2 className="text-3xl font-bold mb-4 mt-12">{block.heading}</h2>}
                  <p className="text-base leading-relaxed mb-4">{block.text}</p>
                </>
              )}
            </div>
          ))}
        </article>
      )
    }

    return null
  }

  return (
    <div className="min-h-screen pt-24">
      <aside className="fixed left-0 top-1/3 -translate-y-1/2 z-40 hidden xl:block w-72">
        <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-lg p-6 shadow-lg">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Quick Navigation</h3>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            {otherPosts.map((post) => (
              <Link
                key={post._id || post.id}
                to={`/blog/${post._id || post.id}`}
                className="group flex gap-3 transition-all duration-300 hover:opacity-100 opacity-75"
              >
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-16 h-16 rounded object-cover flex-shrink-0 group-hover:ring-2 group-hover:ring-primary transition-all"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                <div>
                  <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{post.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <div className="container-fluid">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs uppercase mb-6 rounded-full">
              {currentPost.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{currentPost.title}</h1>
            <div className="flex gap-6 text-muted-foreground mb-8 flex-wrap">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {currentPost.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {currentPost.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {currentPost.readTime}
              </span>
            </div>
            <img
              src={currentPost.image || "/placeholder.svg"}
              alt={currentPost.title}
              className="w-full h-96 rounded-lg object-cover mb-8"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg"
              }}
            />
          </header>

          {renderContent()}

          <div className="mt-12 pt-8 border-t border-border">
            <SocialShare url={typeof window !== "undefined" ? window.location.href : ""} title={currentPost.title} />
          </div>

          <RelatedPosts
            currentPostId={currentPost._id || currentPost.id}
            posts={allBlogs}
            category={currentPost.category}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
