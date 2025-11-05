import MiniHeader from "./MiniHeader"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
// import { PropertyCarousel } from "./home/PropertyCarousel"

const Layout = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* <PropertyCarousel></PropertyCarousel> */}
        <MiniHeader />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
