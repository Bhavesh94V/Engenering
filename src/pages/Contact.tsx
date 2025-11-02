// import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building2 } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import heroStructure2 from "@/assets/hero-structure-2.jpg";
// import aboutBlueprint from "@/assets/about-blueprint.jpg";
// import MapSection from "@/components/common/MapSection";

// const Contact = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section
//         className="relative h-[50vh] flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${heroStructure2})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
//         <div className="relative container-fluid text-center space-y-4">
//           {/* Breadcrumb */}
//           <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
//             <Link to="/" className="hover:text-primary transition-colors">Home</Link>
//             <span>/</span>
//             <span className="text-primary">Contact</span>
//           </div>
          
//           <p className="text-primary text-sm uppercase tracking-widest">Get In Touch</p>
//           <h1 className="text-5xl md:text-7xl font-bold">Let's Start A Conversation</h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Ready to bring your vision to life? Our team is here to discuss your project needs
//           </p>
//         </div>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-24 md:py-32 container-fluid">
//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Form */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Send Us A Message</h2>
//               <p className="text-muted-foreground">
//                 Ready to discuss your next project? Fill out the form and our team will get back
//                 to you within 24 hours.
//               </p>
//             </div>

//             <form className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label htmlFor="firstName" className="text-sm font-medium">
//                     First Name *
//                   </label>
//                   <Input id="firstName" placeholder="John" required />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="lastName" className="text-sm font-medium">
//                     Last Name *
//                   </label>
//                   <Input id="lastName" placeholder="Doe" required />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium">
//                   Email Address *
//                 </label>
//                 <Input id="email" type="email" placeholder="john@example.com" required />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="phone" className="text-sm font-medium">
//                   Phone Number
//                 </label>
//                 <Input id="phone" type="tel" placeholder="+1 (234) 567-890" />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="projectType" className="text-sm font-medium">
//                   Project Type
//                 </label>
//                 <Input id="projectType" placeholder="Commercial, Industrial, etc." />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm font-medium">
//                   Project Details *
//                 </label>
//                 <Textarea
//                   id="message"
//                   placeholder="Tell us about your project..."
//                   rows={6}
//                   required
//                 />
//               </div>

//               <Button variant="hero" size="lg" className="w-full">
//                 Submit Inquiry
//               </Button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
//               <p className="text-muted-foreground">
//                 Reach out through any of these channels. We're here to help with your
//                 engineering needs.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
//                 <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Email Us</h3>
//                   <a
//                     href="mailto:info@structuraleng.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     info@structuraleng.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
//                 <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Call Us</h3>
//                   <a
//                     href="tel:+1234567890"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     +1 (234) 567-890
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
//                 <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Visit Us</h3>
//                   <p className="text-muted-foreground">
//                     123 Engineering Plaza
//                     <br />
//                     Tech District, CA 94105
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
//                 <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Clock className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Business Hours</h3>
//                   <p className="text-muted-foreground">
//                     Monday - Friday: 8:00 AM - 6:00 PM
//                     <br />
//                     Saturday: 9:00 AM - 2:00 PM
//                     <br />
//                     Sunday: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Contact Us Section */}
//       <section className="py-24 bg-muted/30">
//         <div className="container-fluid">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Us?</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Experience world-class structural engineering services backed by innovation and precision
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: MessageSquare,
//                 title: "Quick Response Time",
//                 description: "We respond to all inquiries within 24 hours, ensuring your project stays on track.",
//               },
//               {
//                 icon: Users,
//                 title: "Expert Consultation",
//                 description: "Connect directly with our experienced engineers for personalized project guidance.",
//               },
//               {
//                 icon: Building2,
//                 title: "Comprehensive Solutions",
//                 description: "From initial concept to final construction, we provide full-spectrum engineering support.",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="text-center p-8 bg-background hover-lift hover:shadow-red transition-all duration-500"
//                 style={{
//                   animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
//                 }}
//               >
//                 <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
//                   <item.icon className="h-8 w-8 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Image Section with CTA */}
//       <section 
//         className="relative py-32"
//         style={{
//           backgroundImage: `url(${aboutBlueprint})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="absolute inset-0 bg-background/85" />
//         <div className="relative container-fluid text-center space-y-6">
//           <h2 className="text-4xl md:text-5xl font-bold">Ready to Engineer Excellence?</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Let's discuss how our structural engineering expertise can transform your project into reality
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center pt-4">
//             <Button variant="hero" size="lg" className="group">
//               Schedule a Consultation
//               <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Button>
//             <Link to="/projects">
//               <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
//                 View Our Portfolio
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* FAQ or Additional Info */}
//       <section className="py-24 container-fluid">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
//           <div className="space-y-6">
//             {[
//               {
//                 q: "What is your typical project timeline?",
//                 a: "Project timelines vary based on scope and complexity. Commercial projects typically range from 12-36 months, while smaller residential projects may take 3-6 months.",
//               },
//               {
//                 q: "Do you work with international clients?",
//                 a: "Yes! We've successfully completed projects in over 35 countries and are experienced in working with international building codes and regulations.",
//               },
//               {
//                 q: "What software do you use for structural analysis?",
//                 a: "We utilize industry-leading software including STAAD.Pro, ETABS, SAP2000, AutoCAD, and Revit for comprehensive structural design and analysis.",
//               },
//             ].map((faq, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-muted/30 hover:bg-muted/50 transition-all duration-300"
//                 style={{
//                   animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`,
//                 }}
//               >
//                 <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
//                 <p className="text-muted-foreground">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <MapSection />
//     </div>
//   );
// };

// export default Contact;






// "use client"

// import type React from "react"

// import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building2 } from "lucide-react"
// import { Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useState } from "react"
// import { contactFormSchema } from "@/lib/validation"
// import { FormField } from "@/components/common/FormField"
// import { LoadingSpinner } from "@/components/common/LoadingSpinner"
// import { SuccessAnimation } from "@/components/common/SuccessAnimation"
// import { useSEO } from "@/hooks/useSEO"
// import { pageSEO } from "@/lib/seo"
// import heroStructure2 from "@/assets/hero-structure-2.jpg"
// import aboutBlueprint from "@/assets/about-blueprint.jpg"
// import MapSection from "@/components/common/MapSection"

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     projectType: "",
//     message: "",
//   })
//   const [errors, setErrors] = useState<Record<string, string>>({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [showSuccess, setShowSuccess] = useState(false)

//   useSEO(pageSEO.contact)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target
//     setFormData((prev) => ({ ...prev, [id]: value }))
//     // Clear error when user starts typing
//     if (errors[id]) {
//       setErrors((prev) => ({ ...prev, [id]: "" }))
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setErrors({})

//     try {
//       const validatedData = contactFormSchema.parse(formData)
//       setIsSubmitting(true)

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500))

//       console.log("Form submitted:", validatedData)
//       setShowSuccess(true)
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         projectType: "",
//         message: "",
//       })

//       setTimeout(() => setShowSuccess(false), 3000)
//     } catch (error: any) {
//       const fieldErrors: Record<string, string> = {}
//       error.errors?.forEach((err: any) => {
//         fieldErrors[err.path[0]] = err.message
//       })
//       setErrors(fieldErrors)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section
//         className="relative h-[50vh] flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${heroStructure2})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
//         <div className="relative container-fluid text-center space-y-4">
//           {/* Breadcrumb */}
//           <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
//             <Link to="/" className="hover:text-primary transition-colors">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="text-primary">Contact</span>
//           </div>

//           <p className="text-primary text-sm uppercase tracking-widest">Get In Touch</p>
//           <h1 className="text-5xl md:text-7xl font-bold">Let's Start A Conversation</h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Ready to bring your vision to life? Our team is here to discuss your project needs
//           </p>
//         </div>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-24 md:py-32 container-fluid">
//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Form */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Send Us A Message</h2>
//               <p className="text-muted-foreground">
//                 Ready to discuss your next project? Fill out the form and our team will get back to you within 24 hours.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <FormField label="First Name" error={errors.firstName} required>
//                   <Input
//                     id="firstName"
//                     placeholder="John"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     disabled={isSubmitting}
//                   />
//                 </FormField>
//                 <FormField label="Last Name" error={errors.lastName} required>
//                   <Input
//                     id="lastName"
//                     placeholder="Doe"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     disabled={isSubmitting}
//                   />
//                 </FormField>
//               </div>

//               <FormField label="Email Address" error={errors.email} required>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                 />
//               </FormField>

//               <FormField label="Phone Number" error={errors.phone}>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="+1 (234) 567-890"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                 />
//               </FormField>

//               <FormField label="Project Type" error={errors.projectType}>
//                 <Input
//                   id="projectType"
//                   placeholder="Commercial, Industrial, etc."
//                   value={formData.projectType}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                 />
//               </FormField>

//               <FormField label="Project Details" error={errors.message} required>
//                 <Textarea
//                   id="message"
//                   placeholder="Tell us about your project..."
//                   rows={6}
//                   value={formData.message}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                 />
//               </FormField>

//               <Button variant="hero" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? (
//                   <LoadingSpinner size="sm" />
//                 ) : (
//                   <>
//                     Submit Inquiry
//                     <Send className="ml-2 h-5 w-5" />
//                   </>
//                 )}
//               </Button>
//             </form>

//             {showSuccess && <SuccessAnimation message="Thank you! We'll be in touch within 24 hours." />}
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
//               <p className="text-muted-foreground">
//                 Reach out through any of these channels. We're here to help with your engineering needs.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
//                 <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Email Us</h3>
//                   <a
//                     href="mailto:info@structuraleng.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     info@structuraleng.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
//                 <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Call Us</h3>
//                   <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
//                     +1 (234) 567-890
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
//                 <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Visit Us</h3>
//                   <p className="text-muted-foreground">
//                     123 Engineering Plaza
//                     <br />
//                     Tech District, CA 94105
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
//                 <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Clock className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Business Hours</h3>
//                   <p className="text-muted-foreground">
//                     Monday - Friday: 8:00 AM - 6:00 PM
//                     <br />
//                     Saturday: 9:00 AM - 2:00 PM
//                     <br />
//                     Sunday: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Contact Us Section */}
//       <section className="py-24 bg-muted/30">
//         <div className="container-fluid">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Us?</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Experience world-class structural engineering services backed by innovation and precision
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: MessageSquare,
//                 title: "Quick Response Time",
//                 description: "We respond to all inquiries within 24 hours, ensuring your project stays on track.",
//               },
//               {
//                 icon: Users,
//                 title: "Expert Consultation",
//                 description: "Connect directly with our experienced engineers for personalized project guidance.",
//               },
//               {
//                 icon: Building2,
//                 title: "Comprehensive Solutions",
//                 description:
//                   "From initial concept to final construction, we provide full-spectrum engineering support.",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="text-center p-8 bg-background hover-lift hover:shadow-red transition-all duration-500"
//                 style={{
//                   animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
//                 }}
//               >
//                 <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
//                   <item.icon className="h-8 w-8 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Image Section with CTA */}
//       <section
//         className="relative py-32"
//         style={{
//           backgroundImage: `url(${aboutBlueprint})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="absolute inset-0 bg-background/85" />
//         <div className="relative container-fluid text-center space-y-6">
//           <h2 className="text-4xl md:text-5xl font-bold">Ready to Engineer Excellence?</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Let's discuss how our structural engineering expertise can transform your project into reality
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center pt-4">
//             <Button variant="hero" size="lg" className="group">
//               Schedule a Consultation
//               <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Button>
//             <Link to="/projects">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
//               >
//                 View Our Portfolio
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* FAQ or Additional Info */}
//       <section className="py-24 container-fluid">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
//           <div className="space-y-6">
//             {[
//               {
//                 q: "What is your typical project timeline?",
//                 a: "Project timelines vary based on scope and complexity. Commercial projects typically range from 12-36 months, while smaller residential projects may take 3-6 months.",
//               },
//               {
//                 q: "Do you work with international clients?",
//                 a: "Yes! We've successfully completed projects in over 35 countries and are experienced in working with international building codes and regulations.",
//               },
//               {
//                 q: "What software do you use for structural analysis?",
//                 a: "We utilize industry-leading software including STAAD.Pro, ETABS, SAP2000, AutoCAD, and Revit for comprehensive structural design and analysis.",
//               },
//             ].map((faq, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-muted/30 hover:bg-muted/50 transition-all duration-300"
//                 style={{
//                   animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`,
//                 }}
//               >
//                 <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
//                 <p className="text-muted-foreground">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <MapSection />
//     </div>
//   )
// }

// export default Contact


"use client"

import type React from "react"

import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { contactFormSchema } from "@/lib/validation"
import { FormField } from "@/components/common/FormField"
import { SuccessAnimation } from "@/components/common/SuccessAnimation"
import { useSEO } from "@/hooks/useSEO"
import { pageSEO } from "@/lib/seo"
import heroStructure2 from "@/assets/hero-structure-2.jpg"
import aboutBlueprint from "@/assets/about-blueprint.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useSEO(pageSEO.contact)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    try {
      const validatedData = contactFormSchema.parse(formData)
      setIsSubmitting(true)

      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to submit form")
      }

      console.log("Form submitted successfully")
      setShowSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      })

      setTimeout(() => setShowSuccess(false), 3000)
    } catch (error: any) {
      const fieldErrors: Record<string, string> = {}
      error.errors?.forEach((err: any) => {
        fieldErrors[err.path[0]] = err.message
      })
      setErrors(fieldErrors)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroStructure2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container-fluid text-center space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Contact</span>
          </div>

          <p className="text-primary text-sm uppercase tracking-widest">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-bold">Let's Start A Conversation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Our team is here to discuss your project needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-32 container-fluid">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Send Us A Message</h2>
              <p className="text-muted-foreground">
                Ready to discuss your next project? Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="First Name" error={errors.firstName} required>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </FormField>
                <FormField label="Last Name" error={errors.lastName} required>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </FormField>
              </div>

              <FormField label="Email Address" error={errors.email} required>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label="Phone Number" error={errors.phone}>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label="Project Type" error={errors.projectType}>
                <Input
                  id="projectType"
                  placeholder="Commercial, Industrial, etc."
                  value={formData.projectType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label="Project Details" error={errors.message} required>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </FormField>

              <Button variant="hero" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="text-white font-semibold">Loading...</span>
                ) : (
                  <>
                    Submit Inquiry
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            {showSuccess && <SuccessAnimation message="Thank you! We'll be in touch within 24 hours." />}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out through any of these channels. We're here to help with your engineering needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <a
                    href="mailto:info@structuraleng.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@structuraleng.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Engineering Plaza
                    <br />
                    Tech District, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 hover-lift">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience world-class structural engineering services backed by innovation and precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Quick Response Time",
                description: "We respond to all inquiries within 24 hours, ensuring your project stays on track.",
              },
              {
                icon: Users,
                title: "Expert Consultation",
                description: "Connect directly with our experienced engineers for personalized project guidance.",
              },
              {
                icon: Building2,
                title: "Comprehensive Solutions",
                description:
                  "From initial concept to final construction, we provide full-spectrum engineering support.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background hover-lift hover:shadow-red transition-all duration-500"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section with CTA */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: `url(${aboutBlueprint})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative container-fluid text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Engineer Excellence?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our structural engineering expertise can transform your project into reality
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Schedule a Consultation
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-24 container-fluid">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Our typical project timeline varies depending on the complexity of the project, but we strive to complete projects within 3-6 months.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes, we offer free initial consultations to discuss your project needs and provide guidance.",
              },
              {
                q: "What types of projects do you specialize in?",
                a: "We specialize in a wide range of projects including commercial, industrial, residential, and infrastructure projects.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="text-left p-8 bg-background hover-lift hover:shadow-red transition-all duration-500"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
