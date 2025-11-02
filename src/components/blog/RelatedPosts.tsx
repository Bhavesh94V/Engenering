import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";
import { ArrowUpRight } from "lucide-react";

interface RelatedPostsProps {
  currentPostId: number;
  posts: BlogPost[];
  category: string;
}

const RelatedPosts = ({ currentPostId, posts, category }: RelatedPostsProps) => {
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 border-t border-border">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Related Articles</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group block"
          >
            <div className="relative aspect-video overflow-hidden mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {post.readTime}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 mt-4 text-primary font-semibold group-hover:gap-4 transition-all">
              Read More
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;