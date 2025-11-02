// "use client"

// import { useParams, Link } from "react-router-dom"
// import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2, User } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useProjectDetail, useProjectsAPI } from "@/hooks/useProjectsAPI"

// const ProjectDetail = () => {
//   const { id } = useParams()
//   const { project: currentProject, loading, error } = useProjectDetail(id)
//   const { projects: allProjects } = useProjectsAPI()

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-lg text-muted-foreground">Loading project...</p>
//         </div>
//       </div>
//     )
//   }

//   if (error || !currentProject) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
//           <Link to="/projects">
//             <Button variant="hero">Back to Projects</Button>
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const currentIndex = allProjects.findIndex((p) => (p._id || p.id) === (currentProject._id || currentProject.id))
//   const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
//   const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

//   return (
//     <div className="min-h-screen pt-24">
//       {/* Sticky Navigation Sidebar */}
//       <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
//         <Link to="/projects">
//           <Button
//             variant="outline"
//             size="icon"
//             className="w-12 h-12 rounded-full bg-transparent"
//             title="Back to Projects"
//           >
//             <ArrowLeft className="h-5 w-5" />
//           </Button>
//         </Link>

//         {prevProject && (
//           <Link to={`/projects/${prevProject._id || prevProject.id}`}>
//             <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" title="Previous Project">
//               <ArrowLeft className="h-5 w-5" />
//             </Button>
//           </Link>
//         )}

//         {nextProject && (
//           <Link to={`/projects/${nextProject._id || nextProject.id}`}>
//             <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" title="Next Project">
//               <ArrowRight className="h-5 w-5" />
//             </Button>
//           </Link>
//         )}
//       </div>

//       {/* Hero Image */}
//       <section className="relative h-[70vh] overflow-hidden">
//         <img
//           src={currentProject.image || "/placeholder.svg"}
//           alt={currentProject.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

//         <div className="absolute bottom-0 left-0 right-0 container-fluid pb-12">
//           <div className="max-w-4xl">
//             <p className="text-primary text-sm uppercase tracking-widest mb-4">{currentProject.category} Project</p>
//             <h1 className="text-5xl md:text-7xl font-bold mb-6">{currentProject.title}</h1>
//           </div>
//         </div>
//       </section>

//       {/* Project Details */}
//       <section className="py-16 container-fluid">
//         <div className="max-w-4xl">
//           {/* Quick Info */}
//           <div className="grid md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border/50">
//             <div className="flex items-start gap-3">
//               <MapPin className="h-5 w-5 text-primary mt-1" />
//               <div>
//                 <p className="text-sm text-muted-foreground mb-1">Location</p>
//                 <p className="font-semibold">{currentProject.location}</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <Calendar className="h-5 w-5 text-primary mt-1" />
//               <div>
//                 <p className="text-sm text-muted-foreground mb-1">Year</p>
//                 <p className="font-semibold">{currentProject.year}</p>
//               </div>
//             </div>
//             {currentProject.client && (
//               <div className="flex items-start gap-3">
//                 <User className="h-5 w-5 text-primary mt-1" />
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Client</p>
//                   <p className="font-semibold">{currentProject.client}</p>
//                 </div>
//               </div>
//             )}
//             {currentProject.area && (
//               <div className="flex items-start gap-3">
//                 <Building2 className="h-5 w-5 text-primary mt-1" />
//                 <div>
//                   <p className="text-sm text-muted-foreground mb-1">Area</p>
//                   <p className="font-semibold">{currentProject.area}</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Project Description */}
//           <div className="prose prose-invert max-w-none">
//             <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//               {currentProject.description ||
//                 `This ${currentProject.category.toLowerCase()} project in ${currentProject.location} represents a significant achievement in structural engineering. Our team delivered comprehensive engineering services from initial concept through final construction.`}
//             </p>

//             <h3 className="text-2xl font-bold mb-4 mt-12">Engineering Challenges</h3>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               {currentProject.engineeringChallenges ||
//                 "The project required innovative solutions to address complex structural requirements while maintaining cost-effectiveness and adhering to strict safety standards. Our engineering team developed custom approaches tailored to the specific needs of this development."}
//             </p>

//             <h3 className="text-2xl font-bold mb-4 mt-12">Technical Solutions</h3>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               {currentProject.technicalSolutions ||
//                 "We implemented advanced structural systems incorporating steel frameworks, optimized load distributions, and seismic design principles. Every calculation was verified through rigorous analysis to ensure long-term structural integrity and safety."}
//             </p>

//             <h3 className="text-2xl font-bold mb-4 mt-12">Results</h3>
//             <p className="text-muted-foreground leading-relaxed">
//               {currentProject.results ||
//                 "The project was delivered on schedule and within budget, meeting all client expectations and regulatory requirements. The structure now stands as a testament to engineering excellence and innovative design thinking."}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Navigation - Previous/Next Projects */}
//       <section className="py-16 border-t border-border/50">
//         <div className="container-fluid">
//           <div className="grid md:grid-cols-2 gap-8">
//             {prevProject && (
//               <Link
//                 to={`/projects/${prevProject._id || prevProject.id}`}
//                 className="group relative overflow-hidden bg-muted aspect-[16/10]"
//               >
//                 <div className="absolute inset-0">
//                   <img
//                     src={prevProject.image || "/placeholder.svg"}
//                     alt={prevProject.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
//                 </div>

//                 <div className="relative h-full flex flex-col justify-end p-8">
//                   <p className="text-sm text-primary mb-2 flex items-center gap-2">
//                     <ArrowLeft className="h-4 w-4" />
//                     Previous Project
//                   </p>
//                   <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{prevProject.title}</h3>
//                 </div>
//               </Link>
//             )}

//             {nextProject && (
//               <Link
//                 to={`/projects/${nextProject._id || nextProject.id}`}
//                 className="group relative overflow-hidden bg-muted aspect-[16/10]"
//               >
//                 <div className="absolute inset-0">
//                   <img
//                     src={nextProject.image || "/placeholder.svg"}
//                     alt={nextProject.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
//                 </div>

//                 <div className="relative h-full flex flex-col justify-end p-8 text-right">
//                   <p className="text-sm text-primary mb-2 flex items-center justify-end gap-2">
//                     Next Project
//                     <ArrowRight className="h-4 w-4" />
//                   </p>
//                   <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{nextProject.title}</h3>
//                 </div>
//               </Link>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ProjectDetail



"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProjectDetail, useProjectsAPI } from "@/hooks/useProjectsAPI"

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"

const ProjectDetail = () => {
  const { id } = useParams()
  const { project: currentProject, loading, error } = useProjectDetail(id)
  const { projects: allProjects } = useProjectsAPI()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading project...</p>
      </div>
    )
  }

  if (error || !currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button variant="hero">Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = allProjects.findIndex(
    (p) => (p._id || p.id) === (currentProject._id || currentProject.id)
  )
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  // ✅ Helper to get full image URL safely
  const getImageURL = (imagePath) =>
    imagePath ? `${BASE_URL}${imagePath}` : "/placeholder.svg"

  return (
    <div className="min-h-screen pt-24">
      {/* Sidebar Navigation */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <Link to="/projects">
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full bg-transparent"
            title="Back to Projects"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>

        {prevProject && (
          <Link to={`/projects/${prevProject._id || prevProject.id}`}>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full"
              title="Previous Project"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        )}

        {nextProject && (
          <Link to={`/projects/${nextProject._id || nextProject.id}`}>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full"
              title="Next Project"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        )}
      </div>

      {/* ✅ Hero Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={getImageURL(currentProject.imagePath)}
          alt={currentProject.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container-fluid pb-12">
          <div className="max-w-4xl">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              {currentProject.category} Project
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {currentProject.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 container-fluid">
        <div className="max-w-4xl">
          {/* Quick Info */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border/50">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold">{currentProject.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Year</p>
                <p className="font-semibold">{currentProject.year}</p>
              </div>
            </div>
            {currentProject.client && (
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-semibold">{currentProject.client}</p>
                </div>
              </div>
            )}
            {currentProject.area && (
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Area</p>
                  <p className="font-semibold">{currentProject.area}</p>
                </div>
              </div>
            )}
          </div>

          {/* Project Description */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {currentProject.description ||
                `This ${currentProject.category.toLowerCase()} project in ${currentProject.location} represents a significant achievement in structural engineering.`}
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-12">
              Engineering Challenges
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {currentProject.engineeringChallenges}
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-12">
              Technical Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {currentProject.technicalSolutions}
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-12">Results</h3>
            <p className="text-muted-foreground leading-relaxed">
              {currentProject.results}
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Navigation - Previous/Next Projects */}
      <section className="py-16 border-t border-border/50">
        <div className="container-fluid">
          <div className="grid md:grid-cols-2 gap-8">
            {prevProject && (
              <Link
                to={`/projects/${prevProject._id || prevProject.id}`}
                className="group relative overflow-hidden bg-muted aspect-[16/10]"
              >
                <div className="absolute inset-0">
                  <img
                    src={getImageURL(prevProject.imagePath)}
                    alt={prevProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8">
                  <p className="text-sm text-primary mb-2 flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Previous Project
                  </p>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </h3>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link
                to={`/projects/${nextProject._id || nextProject.id}`}
                className="group relative overflow-hidden bg-muted aspect-[16/10]"
              >
                <div className="absolute inset-0">
                  <img
                    src={getImageURL(nextProject.imagePath)}
                    alt={nextProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8 text-right">
                  <p className="text-sm text-primary mb-2 flex items-center justify-end gap-2">
                    Next Project
                    <ArrowRight className="h-4 w-4" />
                  </p>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
