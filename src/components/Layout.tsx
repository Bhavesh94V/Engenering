// import { ReactNode } from "react";
// import MiniHeader from "./MiniHeader";
// import Header from "./Header";
// import Footer from "./Footer";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <MiniHeader />
//       <Header />
//       <main className="flex-1">{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;


import MiniHeader from "./MiniHeader"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MiniHeader />
      <Header />
      <main className="flex-1">
        <Outlet /> {/* 👈 This is what actually renders your pages */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
