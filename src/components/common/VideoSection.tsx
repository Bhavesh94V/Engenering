import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    title: "Company Overview",
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com", // Replace with actual video
    description: "Learn about our mission, values, and approach to structural engineering"
  },
  {
    title: "Project Showcase",
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com", // Replace with actual video
    description: "Explore our most innovative and challenging projects"
  },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Us in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how we bring structural engineering excellence to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="group">
              {activeVideo === video.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div
                  className="relative aspect-video overflow-hidden cursor-pointer"
                  onClick={() => setActiveVideo(video.videoUrl)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                    <div className="bg-primary rounded-full p-6 group-hover:scale-110 transition-transform">
                      <Play className="h-12 w-12 text-primary-foreground" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;