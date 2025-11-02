// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";
// import Clients from "./pages/Clients";
// import Blog from "./pages/Blog";
// import BlogDetail from "./pages/BlogDetail";
// import Contact from "./pages/Contact";
// import Career from "./pages/Career";
// import Team from "./pages/Team";
// import Certifications from "./pages/Certifications";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/services/:id" element={<ServiceDetail />} />
//             <Route path="/why-choose-us" element={<WhyChooseUs />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/projects/:id" element={<ProjectDetail />} />
//             <Route path="/clients" element={<Clients />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/blog/:id" element={<BlogDetail />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="/team" element={<Team />} />
//             <Route path="/certifications" element={<Certifications />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;





// import { Toaster } from "@/components/ui/toaster"
// import { Toaster as Sonner } from "@/components/ui/sonner"
// import { TooltipProvider } from "@/components/ui/tooltip"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Layout from "./components/Layout"
// import { CookieConsent } from "@/components/common/CookieConsent"
// import { BackToTop } from "@/components/common/BackToTop"
// import { ErrorBoundary } from "@/components/common/ErrorBoundary"
// import { AnalyticsTracker } from "@/components/common/AnalyticsTracker"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Services from "./pages/Services"
// import ServiceDetail from "./pages/ServiceDetail"
// import WhyChooseUs from "./pages/WhyChooseUs"
// import Projects from "./pages/Projects"
// import ProjectDetail from "./pages/ProjectDetail"
// import Clients from "./pages/Clients"
// import Blog from "./pages/Blog"
// import BlogDetail from "./pages/BlogDetail"
// import Contact from "./pages/Contact"
// import Career from "./pages/Career"
// import Team from "./pages/Team"
// import Certifications from "./pages/Certifications"
// import NotFound from "./pages/NotFound"

// const queryClient = new QueryClient()

// const App = () => (
//   <ErrorBoundary>
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <AnalyticsTracker />
//           <Layout>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/services/:id" element={<ServiceDetail />} />
//               <Route path="/why-choose-us" element={<WhyChooseUs />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/projects/:id" element={<ProjectDetail />} />
//               <Route path="/clients" element={<Clients />} />
//               <Route path="/blog" element={<Blog />} />
//               <Route path="/blog/:id" element={<BlogDetail />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/career" element={<Career />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/certifications" element={<Certifications />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </Layout>
//           <CookieConsent />
//           <BackToTop />
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   </ErrorBoundary>
// )

// export default App


import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import Layout from "./components/Layout"
import { CookieConsent } from "@/components/common/CookieConsent"
import { BackToTop } from "@/components/common/BackToTop"
import { ErrorBoundary } from "@/components/common/ErrorBoundary"
import { AnalyticsTracker } from "@/components/common/AnalyticsTracker"
import { AdminProtectedRoute } from "@/components/AdminProtectedRoute"

// ===== Pages =====
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail"
import WhyChooseUs from "./pages/WhyChooseUs"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Clients from "./pages/Clients"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail"
import Contact from "./pages/Contact"
import Career from "./pages/Career"
import Team from "./pages/Team"
import Certifications from "./pages/Certifications"
import NotFound from "./pages/NotFound"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"

const queryClient = new QueryClient()

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnalyticsTracker />

            <Routes>
              {/* ===== Admin Routes ===== */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminProtectedRoute>
                    <AdminDashboard />
                  </AdminProtectedRoute>
                }
              />

              {/* ===== Public Routes with Layout ===== */}
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:id" element={<ServiceDetail />} />
                <Route path="why-choose-us" element={<WhyChooseUs />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<ProjectDetail />} />
                <Route path="clients" element={<Clients />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="career" element={<Career />} />
                <Route path="team" element={<Team />} />
                <Route path="certifications" element={<Certifications />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>

            <CookieConsent />
            <BackToTop />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </Provider>
  </ErrorBoundary>
)

export default App
